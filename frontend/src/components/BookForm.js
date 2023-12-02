import { useState } from 'react';
import { useBooksContext } from '../hooks/useBooksContext';
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";


const BookForm = () => {
    const { dispatch } = useBooksContext();
    const [title, setTitle] = useState('')
    const [isbn_10, setIsbn_10] = useState('')
    const [authors, setAuthors] = useState('')
    const [publish_date, setPublish_date] = useState('')
    const [review, setReview] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const book = { title, isbn_10, authors, publish_date, review };

        const response = await fetch('https://bookwormbackend-nickpaterson.cloud.okteto.net/api/books/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        })

        const json = await response.json()

        if (!response.ok) {
          setError(json.error)  
        } else {
          setTitle('')
          setIsbn_10('')
          setAuthors('')
          setPublish_date('')
          setReview('')
          setError(null)
          console.log("Book form submitted");
          dispatch({ type: 'CREATE_BOOK_REVIEW', payload: json })
        } 
    }


    return (
      <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
          Add a Book Review
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
          Enter the details of the book you want to review.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 create" onSubmit={handleSubmit}>
          <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Title
              </Typography>
              <Input
                  size="lg"
                  placeholder="Title"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                      className: "before:content-none after:content-none",
                  }}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                  ISBN-10
              </Typography>
              <Input
                  type="text"
                  size="lg"
                  placeholder="ISBN-10"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                      className: "before:content-none after:content-none",
                  }}
                  value={isbn_10}
                  onChange={(e) => setIsbn_10(e.target.value)}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Authors
              </Typography>
                <Input
                  type="text"
                  size="lg"
                  placeholder="Authors"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  value={authors}
                  onChange={(e) => setAuthors(e.target.value.split(', '))}
                />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Publish Date
              </Typography>
              <Input
                  type="date"
                  size="lg"
                  placeholder="Publish Date"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                      className: "before:content-none after:content-none",
                  }}
                  value={publish_date}
                  onChange={(e) => setPublish_date(e.target.value)}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Review
              </Typography>
              <Textarea
                  size="lg"
                  placeholder="Review"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                      className: "before:content-none after:content-none",
                  }}
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
              />

          </div>
          {error && <p className="text-red-500">{error}</p>}
          <Button className="mt-6" fullWidth type="submit">
              Add Review
          </Button>
      </form>
      </Card>
    )
}

export default BookForm