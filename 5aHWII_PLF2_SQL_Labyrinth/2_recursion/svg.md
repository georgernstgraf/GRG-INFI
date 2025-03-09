# mazegenerator svgs

deno -A main.ts  4x3.json 1,4 7,6

deno -A main.ts  5x5.json 1,6 11,6

deno -A main.ts  5x5.json 1,20 41,22

## mein Array

### dimension

```text
(svg-y) * 2 + 1 Zeilen
(svg-x) * 2 + 1 Spalten
```

### finden in mein array vom svg

```text
z = ((svg-y +2 ) / 16 - 1/4) * 2
s = ((svg-x +2 ) / 16 - 1/4) * 2
```

## werte

| x | y |
|---|---|
|  5| 84|
| 20|324|

k = 16, d = 4: `y = f(x) = 16x + 4`

Umkehrfunktion: `y = f(x) = x/16 - 1/4`

`svg-x + 2` in die Umkehrfunktion werfen.

Mein Array hat dim: `my-x * 2 + 1`

Beispiel line1:

```text
line x1="2" y1="2" x2="34" y2="2"
x1:
((2+2)/16 - .25) * 2 = 0
y1:
((2+2)/16 - .25) * 2 = 0
x2:
((34+2)/16 - .25) * 2 = 4
```
