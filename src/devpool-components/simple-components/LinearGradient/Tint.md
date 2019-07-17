

creates a background of linear gradient

pass in the rotation angle and an array of objects with the `color` and `spread` property

- `color` [string]  color code Hexidecimal, RGBA, RGB
- `spread` [string] percentage spread of the color
- `rotate` [int] Rotation angle of all colors


```javascript


const tintColor = [
  {
    color: 'rgba(255, 255, 255, 1)',
    spread: '50%',
  },
  {
    color: 'rgba(55, 125, 70, 0.8)',
    spread: '40%',
  },
]
creates a
 <LinearGradient rotate={160} tint={tintColor} w={100} h={50}>

... // Content


 <LinearGradient>




```