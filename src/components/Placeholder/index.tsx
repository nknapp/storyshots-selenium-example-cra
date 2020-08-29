type WidthXHeight = string;
type DataUrl = string;

export function placeholderImage(
  size: WidthXHeight,
  text: string,
  color: string = "black"
): DataUrl {
  const [width, height] = size.split("x").map(Number);
  const fontSize= Math.min(20, width / 5)
  const svg = `<?xml version="1.0" encoding="utf-8"?>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.2" baseProfile="tiny"  width="${width}" height="${height}" stroke="${color}">
           <line x1="50%" y1="0" x2="50%" y2="100%" opacity="0.2"/>
           <line x1="0" y1="50%" x2="100%" y2="50%" stroke="${color}" opacity="0.1"/>
           <line x1="75%" y1="0" x2="75%" y2="100%" stroke="${color}" opacity="0.1"/>
           <line x1="0" y1="75%" x2="100%" y2="75%" stroke="${color}" opacity="0.1"/>
           <line x1="25%" y1="0" x2="25%" y2="100%" stroke="${color}" opacity="0.1"/>
           <line x1="0" y1="25%" x2="100%" y2="25%" stroke="${color}" opacity="0.1"/>
           <text x="50%" y="50%" text-anchor="middle" stroke="none" fill="${color}" font-family="FreeMono" font-weight="bold" font-size="${fontSize}px">
                <tspan dy="-0.25rem" text-anchor="middle">${width}x${height}</tspan>
            </text>
           <text x="50%" y="50%" text-anchor="middle" stroke="none" fill="${color}" font-family="FreeMono" font-size="70%">
                <tspan dy="0.25rem" dominant-baseline="hanging" text-anchor="middle">${text}</tspan>
           </text>
           <rect x="0" y="0" width="100%" height="100%" fill="none"/>
        </svg>
    `;
  return "data:image/svg+xml;base64," + btoa(svg.trim().replace("\n", ""));
}
