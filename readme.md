## Chess (2 Player)

Written entirely in React JSX

The whole idea is in the following block of code

```js
  //Creates the Chessboard pattern
  useEffect(() => {
    let status = true;
    for (let i=1;i < 65;i++)
    {
    if(status) {
      setSquares(prev => [...prev,{"color" : 1,"id" : i}])
    }
    else{
      setSquares(prev => [...prev,{"color" : 0,"id" : i,}])
    }
    status = (i%8==0) ? status : !status
  }
  },[])

```
Basically it creates and array of objects containing a value of `"color"` for the chessboard.

They are then rendered in the DOM using the `.map()` function

```js
{squares.map(square => (
<div id={`square_${square.id}`} className="square" style={{backgroundColor : square.color===1 ? colors.white : colors.black}} ></div>
))}
```

After all of these the rest is just some math and DOM manipulation

This is a Picture representing the UI of the project

![](https://i.imgur.com/LldCymx.png)

Everything is controlled using `drag-and-drop` and `position hints`
