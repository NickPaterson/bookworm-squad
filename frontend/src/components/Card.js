import { useBooksContext } from "../hooks/useBooksContext";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    IconButton,
  } from "@material-tailwind/react";
   
  const ReviewCard = ({book}) => {
    const { dispatch } = useBooksContext();

    const { isbn_10, alt, title, review } = book;
  
    const src = `https://covers.openlibrary.org/b/isbn/${isbn_10}-M.jpg`;

    const handleDelete = async () => {
      const response = await fetch(`http://localhost:4000/api/books/${book._id}`, {
        method: 'DELETE',
      });

      const json = await response.json();

      if (response.ok) {
        dispatch({ type: 'DELETE_BOOK_REVIEW', payload: json });
        console.log("Book deleted");
      }
    };

    
    return (
        <div className="home-card-container w-3/4 sm:w-1/2 lg:w-1/3 mx-auto mt-8">
          <Card className="mx-2">
            <CardHeader color="blue-gray" className="relative">
              <img src={src} alt={alt} className="w-full object-cover"/>
            </CardHeader>
            <CardBody className="h-full">
              <Typography variant="h5" color="blue-gray" className="mb-2 whitespace-nowrap">
                {title}
              </Typography>
              <div className="flex-grow">{/* Empty div to make CardBody flex-grow */}</div>
              <Typography className="h-32 overflow-hidden">
                {/* Set a fixed height, adjust as needed */}
                {review}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button color="amber" className="w-full mb-2">Read Review</Button>
              <IconButton className="error-bg" onClick={handleDelete}>
                <i className="fas fa-trash" />
              </IconButton>
            </CardFooter> 
            
          </Card>
        </div>  
      
    );
  }

export default ReviewCard;