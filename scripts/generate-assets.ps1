param(
  [string]$SourceDir = (Join-Path $PSScriptRoot "..\aki"),
  [string]$OutputDir = (Join-Path $PSScriptRoot "..\assets\generated")
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Drawing

function Ensure-Directory {
  param([string]$Path)

  if (-not (Test-Path -LiteralPath $Path)) {
    New-Item -ItemType Directory -Path $Path | Out-Null
  }
}

function Get-SourceImage {
  param([string]$Pattern)

  $match = Get-ChildItem -LiteralPath $SourceDir -Filter $Pattern | Select-Object -First 1
  if (-not $match) {
    throw "Source image not found for pattern: $Pattern"
  }

  return $match.FullName
}

function New-Canvas {
  param(
    [int]$Width,
    [int]$Height
  )

  $bitmap = New-Object System.Drawing.Bitmap $Width, $Height
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

  return [pscustomobject]@{
    Bitmap = $bitmap
    Graphics = $graphics
  }
}

function Draw-CoverImage {
  param(
    [System.Drawing.Graphics]$Graphics,
    [System.Drawing.Image]$Image,
    [int]$Width,
    [int]$Height
  )

  $ratio = [Math]::Max($Width / $Image.Width, $Height / $Image.Height)
  $scaledWidth = [int]([Math]::Ceiling($Image.Width * $ratio))
  $scaledHeight = [int]([Math]::Ceiling($Image.Height * $ratio))
  $x = [int](($Width - $scaledWidth) / 2)
  $y = [int](($Height - $scaledHeight) / 2)

  $Graphics.DrawImage($Image, $x, $y, $scaledWidth, $scaledHeight)
}

function Add-Overlay {
  param(
    [System.Drawing.Graphics]$Graphics,
    [int]$Width,
    [int]$Height,
    [System.Drawing.Color]$TopColor,
    [System.Drawing.Color]$BottomColor
  )

  $brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    (New-Object System.Drawing.Rectangle 0, 0, $Width, $Height),
    $TopColor,
    $BottomColor,
    90
  )
  $Graphics.FillRectangle($brush, 0, 0, $Width, $Height)
  $brush.Dispose()
}

function Add-Vignette {
  param(
    [System.Drawing.Graphics]$Graphics,
    [int]$Width,
    [int]$Height
  )

  $path = New-Object System.Drawing.Drawing2D.GraphicsPath
  $path.AddEllipse(-$Width * 0.08, -$Height * 0.08, $Width * 1.16, $Height * 1.16)
  $brush = New-Object System.Drawing.Drawing2D.PathGradientBrush($path)
  $brush.CenterColor = [System.Drawing.Color]::FromArgb(0, 0, 0, 0)
  $brush.SurroundColors = @([System.Drawing.Color]::FromArgb(150, 10, 7, 10))
  $Graphics.FillPath($brush, $path)
  $brush.Dispose()
  $path.Dispose()
}

function Add-Caption {
  param(
    [System.Drawing.Graphics]$Graphics,
    [string]$Title,
    [string]$Subtitle,
    [int]$X,
    [int]$Y,
    [int]$Width
  )

  $titleFont = New-Object System.Drawing.Font("Georgia", 44, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
  $subtitleFont = New-Object System.Drawing.Font("Segoe UI", 22, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
  $titleBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 255, 248, 242))
  $shadowBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(130, 30, 18, 24))
  $titleRect = [System.Drawing.RectangleF]::new([float]$X, [float]$Y, [float]$Width, 64)
  $shadowRect = [System.Drawing.RectangleF]::new([float]($X + 4), [float]($Y + 4), [float]$Width, 64)
  $subtitleRect = [System.Drawing.RectangleF]::new([float]$X, [float]($Y + 58), [float]$Width, 52)

  $Graphics.DrawString($Title, $titleFont, $shadowBrush, $shadowRect)
  $Graphics.DrawString($Title, $titleFont, $titleBrush, $titleRect)
  $Graphics.DrawString($Subtitle, $subtitleFont, $shadowBrush, ($subtitleRect.X + 3), ($subtitleRect.Y + 3))
  $Graphics.DrawString($Subtitle, $subtitleFont, $titleBrush, $subtitleRect)

  $titleFont.Dispose()
  $subtitleFont.Dispose()
  $titleBrush.Dispose()
  $shadowBrush.Dispose()
}

function Save-GeneratedImage {
  param(
    [string]$SourcePath,
    [string]$TargetPath,
    [int]$Width,
    [int]$Height,
    [string]$Title,
    [string]$Subtitle,
    [System.Drawing.Color]$TopColor,
    [System.Drawing.Color]$BottomColor
  )

  $canvas = New-Canvas -Width $Width -Height $Height
  $image = [System.Drawing.Image]::FromFile($SourcePath)

  try {
    Draw-CoverImage -Graphics $canvas.Graphics -Image $image -Width $Width -Height $Height
    Add-Overlay -Graphics $canvas.Graphics -Width $Width -Height $Height -TopColor $TopColor -BottomColor $BottomColor
    Add-Vignette -Graphics $canvas.Graphics -Width $Width -Height $Height
    Add-Caption -Graphics $canvas.Graphics -Title $Title -Subtitle $Subtitle -X 58 -Y ([int]($Height * 0.76)) -Width ([int]($Width * 0.78))
    $canvas.Bitmap.Save($TargetPath, [System.Drawing.Imaging.ImageFormat]::Png)
  }
  finally {
    $image.Dispose()
    $canvas.Graphics.Dispose()
    $canvas.Bitmap.Dispose()
  }
}

Ensure-Directory -Path $OutputDir

$sources = @{
  title   = Get-SourceImage -Pattern "670628850_*.jpg"
  walk    = Get-SourceImage -Pattern "670174321_*.jpg"
  park    = Get-SourceImage -Pattern "519115702_*.jpg"
  play    = Get-SourceImage -Pattern "655292309_*.jpg"
  rest    = Get-SourceImage -Pattern "481914630_*.jpg"
  confess = Get-SourceImage -Pattern "472470594_*.jpg"
}

Save-GeneratedImage -SourcePath $sources.title -TargetPath (Join-Path $OutputDir "title.png") -Width 1600 -Height 900 -Title "Aki ADV" -Subtitle "warm evening walk" -TopColor ([System.Drawing.Color]::FromArgb(80, 255, 159, 115)) -BottomColor ([System.Drawing.Color]::FromArgb(110, 12, 8, 12))
Save-GeneratedImage -SourcePath $sources.walk -TargetPath (Join-Path $OutputDir "walk.png") -Width 1600 -Height 900 -Title "dusk walk" -Subtitle "start with a gentle touch" -TopColor ([System.Drawing.Color]::FromArgb(70, 255, 202, 161)) -BottomColor ([System.Drawing.Color]::FromArgb(120, 18, 10, 16))
Save-GeneratedImage -SourcePath $sources.park -TargetPath (Join-Path $OutputDir "park.png") -Width 1600 -Height 900 -Title "park date" -Subtitle "keep walking together" -TopColor ([System.Drawing.Color]::FromArgb(60, 106, 194, 255)) -BottomColor ([System.Drawing.Color]::FromArgb(100, 14, 12, 20))
Save-GeneratedImage -SourcePath $sources.play -TargetPath (Join-Path $OutputDir "play.png") -Width 1600 -Height 900 -Title "play time" -Subtitle "the heart keeps warming up" -TopColor ([System.Drawing.Color]::FromArgb(60, 255, 168, 118)) -BottomColor ([System.Drawing.Color]::FromArgb(90, 13, 9, 13))
Save-GeneratedImage -SourcePath $sources.rest -TargetPath (Join-Path $OutputDir "rest.png") -Width 1600 -Height 900 -Title "resting" -Subtitle "slow down the breath" -TopColor ([System.Drawing.Color]::FromArgb(80, 196, 162, 255)) -BottomColor ([System.Drawing.Color]::FromArgb(115, 14, 11, 18))
Save-GeneratedImage -SourcePath $sources.confess -TargetPath (Join-Path $OutputDir "confess.png") -Width 1600 -Height 900 -Title "confession" -Subtitle "say the important line" -TopColor ([System.Drawing.Color]::FromArgb(70, 255, 183, 140)) -BottomColor ([System.Drawing.Color]::FromArgb(110, 10, 8, 12))
Save-GeneratedImage -SourcePath $sources.confess -TargetPath (Join-Path $OutputDir "ending.png") -Width 1600 -Height 900 -Title "ending" -Subtitle "the next walk is ours too" -TopColor ([System.Drawing.Color]::FromArgb(80, 255, 205, 159)) -BottomColor ([System.Drawing.Color]::FromArgb(110, 14, 10, 14))
