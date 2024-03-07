import '../styles/index.css'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useState } from 'react';

function Home() {
  const [books, setBooks] = useState([]);

  const handleAddBook = () => {
    const title = prompt("Enter the book's title:");
    const author = prompt("Enter the author's name:");
    const description = prompt("Enter a description:");
    const image = prompt("Enter the image URL:");

    if (title && author && description && image) {
      const newBook = {
        title: title,
        author: author,
        description: description,
        image: image,
      };
      setBooks([...books, newBook]);
    }
  };
  return (
    <>
    <button onClick={handleAddBook}>Add a Book</button>
      <div className="container">


        <div className="card">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="500"
                image="https://m.media-amazon.com/images/I/71hWYm+S3IL._SY466_.jpg"
                alt="Gambler: Secrets from a Life at Risk"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Gambler: Secrets from a Life at Risk
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Anybody can get lucky. Nobody controls the odds like Billy Walters. Widely regarded as “the Michael Jordan of sports betting,” Walters is a living legend in Las Vegas and among sports bettors worldwide. With an unmatched winning streak of thirty-six consecutive years, Walters has become fabulously wealthy by placing hundreds of millions of dollars a year in gross wagers.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="card">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="500"
                image="https://basketballhq.com/wp-content/uploads/2017/11/The-Jordan-Rules.jpg"
                alt="The Jordan Rules"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  The Jordan Rules
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Michael Jordan is widely considered the best basketball player ever to play the game, but there is always more than meets the eye. The Jordan Rules will give an inside look at MJ and some of the areas that he dealt with off the court in his first championship season with the Chicago Bulls
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="card">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="500"
                image="https://assets.asaxiy.uz/product/items/desktop/5e15bdc38f9a1.jpg.webp"
                alt="Xamsa asari"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Alisher Navoiy
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Navoi’s main poetic work is “Khamsa” (“Five”), written in the Chagatai language. The “Khamsa” genre arose in the 12th century, its founder was the great Azerbaijani poet Nizami Ganjavi (1141-1209).
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="card">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="500"
                image="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1562352254l/51016929.jpg"
                alt="Raze"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Raze
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Joe has started to draw attention to himself and his abilities. While some of the attention is good and allows for personal growth, most of it is from various organizations that feel threatened by the sudden upswing of power that Joe’s guild—The Wanderers—are attaining.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="card">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="500"
                image="https://m.media-amazon.com/images/I/71FMZktDTuL._SY466_.jpg"
                alt="Raze"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  The Logic Of Sports Betting
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  The Logic Of Sports Betting answers all these questions and more with a dash of humor and a whole lot of real talk about how it all works. Peek behind the counter and learn how sportsbooks operate. Combine that insider knowledge with why-didn’t-I-think-of-that sports betting logic, and you have the winning formula.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="card">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="500"
                image="https://thestoryexchange.org/app/uploads/2023/12/91kxaVLxgL._AC_UF10001000_QL80_-525x798.jpg"
                alt="Raze"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  The Extinction of Irena Rey by Jennifer Croft
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Eight people arrive at the house of world-renowned author Irena Rey, nestled deep in a Polish forest on the border of Belarus. The people are translators from eight different countries, and they are tasked with translating the author’s masterpiece, “Gray Eminence.” But just days after they arrive, Irena goes missing.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        {books.map((book, index) => (
          <div className="card" key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia component="img" height="500" image={book.image} alt={book.title} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {book.title} by {book.author}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {book.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home;