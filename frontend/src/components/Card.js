import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export function ReviewCard(props) {
    const { src, alt, title, description } = props;
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
            {description}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button color="amber" className="w-full">Read Review</Button>
        </CardFooter>
      </Card>
    </div>
      
    );
  }