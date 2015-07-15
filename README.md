# holder.ninja
This is an open source server side __image holder__ web service. All images are _SVG_ format and they can scale nicely. It doesn't support another image formats. And it gives the requested images with a `"max-age one year"` header for awesome cache controlling.

##USAGE
`http://holder.ninja/800x600.svg`

###PARAMETERS

The service has six parameters and they separated with a comma.


| # |	Parameter |	Description |	Sample |
----|-----------|-------------|--------|
| 1 |	Size |	Width and Height |	`800x600` |
| 2 |	Text |	Optional image text. Default: Their size value. It can be two lines by a `|` separator.	 | `HELLO|WORLD`
| 3 |	Background |	Optional hex background color without #. Default: `ddd`	| `ddd` |
| 4 |	Foreground |	Optional text color without #. Default: `333` |	`666` |
| 5 |	Font size |	Font size without px. Default: `24` |	`32` |
| 6 |	Font family |	Single font family. Default: `Helvetica` |	`Arial` |


##SAMPLES
All sample images scaled by css.


| Requested URL | Response Image |
----------------|-----------------
| `http://holder.ninja/200x150.svg` | ![holder.ninja](http://holder.ninja/200x150.svg) |
| `http://holder.ninja/200x150,sample%20text.svg`  | ![holder.ninja](http://holder.ninja/200x150,sample%20text.svg) |
| `http://holder.ninja/200x150,,8bd,fff.svg`  |![holder.ninja](http://holder.ninja/200x150,,8bd,fff.svg) |
| `http://holder.ninja/200x150,HELLO|WORLD,,,44,Verdana.svg` |  ![holder.ninja](http://holder.ninja/200x150,HELLO\|WORLD,,,44,Verdana.svg) |

