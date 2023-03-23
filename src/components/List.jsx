
import Button from '@mui/material/Button';
import Box  from '@mui/material/Box';
import { Typography } from '@mui/material';

const List = ({toDos}) => {
    console.log(toDos)


    const handleClick = (e)=> {
        console.log('hi')
    }

  const listItems =   toDos.map( (todo)=> {
        return (
          <div> 
        <Typography sx={ { fontSize: '1.5rem', margin: '12px auto'} } variant='body1'>{todo}</Typography>
        <Button variant='contained' onClick={handleClick} > Click Me </Button>
        </div>
        )
    } ) 


  return (
    <div>
    <Box  sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }} >
     <p>{listItems}</p>
     <Button />
    </Box>
     </div>
    )

}


export default List