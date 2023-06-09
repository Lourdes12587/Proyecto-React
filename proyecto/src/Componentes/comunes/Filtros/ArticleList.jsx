import { Container, Grid, Card, CardMedia, CardContent,
Typography, CardActions, Button, CardActionArea} from "@mui/material";
import React from 'react'

export const ArticleList = ({ articles }) => {
	return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px'}}>
            {articles.map(article => (
          <Container>
            <Grid container spacing={5} sx={{mt:3}}/>
              <Grid 
              item 
              xs ={12}
              sm ={6}
              md ={4}
              >
                <Card 
                sx={{ width: 350}}
                >       
                <CardActionArea>
                <CardMedia
                  content='img'
                  image={article.image}
                  sx={{ height: 320 }}

                  title="green iguana"
                  />
                  <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {article.titulo}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {article.descripcion}
                  </Typography>
                  </CardContent>
                </CardActionArea>
                  <CardActions>
                  <Button size="small">Compartir</Button>
                  <Button variant="contained" size="small">Leer mas</Button>
                  </CardActions>
                </Card>
            </Grid>  
          </Container>

            ))}
        </div>
    )
};

export default ArticleList
