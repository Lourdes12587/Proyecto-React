import React from 'react'
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, CardActionArea} from "@mui/material";
import { Container } from '@chakra-ui/react';

const CardsTodas = () => {
  return (
    <Container>
      <Grid container Spacing={1} sx={{mt:4}}>
        <Grid item 
          xs={12}
          sm={6}
          md={4}
          lg={3}>
          <CardActionArea>
            <Card 
            sx={{ width: 350}}
            >
                <CardMedia
                component="img"
                image="https://d.ibtimes.co.uk/en/full/1566346/julian-assange-wikileaks-founder.jpg?w=400"
                title=""
                height="300"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                JULIAN ASSANGE: Heroe Mundial
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus soluta sed deleniti saepe voluptatum culpa unde explicabo fugiat ipsa repellendus provident quo at, ducimus eligendi, quibusdam nam suscipit a!
                </Typography>
                </CardContent>
            
                <CardActions>
                <Button size="small">Compartir</Button>
                <Button variant="contained" size="small">Leer mas</Button>
                </CardActions>
            </Card>
            </CardActionArea>
        </Grid>

        <Grid item 
            xs={12}
            sm={6}
            md={4}
            lg={3}>
          
            <CardActionArea>
            <Card sx={{ width: 350 }}>
                <CardMedia
                component="img"
                image="https://th.bing.com/th/id/R.a2844d2a9dc9b3ee18541d7115d280cc?rik=rnavqgWfFPqthw&riu=http%3a%2f%2fwww.criticatac.ro%2flefteast%2fwp-content%2fuploads%2f2017%2f02%2felbakyan.jpg&ehk=ejDsEpBdXJiwn%2fvx9iiZ9vRS7843Rd061ugac%2f%2fuH10%3d&risl=&pid=ImgRaw&r=0"
                title=""
                height="300"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                ALEXANDRA ELBAKYAN: La Robin Hood de la ciencia
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus soluta sed deleniti saepe voluptatum culpa unde explicabo fugiat ipsa repellendus provident quo at, ducimus eligendi, quibusdam nam suscipit a!
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Compartir</Button>
                <Button variant="contained" size="small">Leer mas</Button>
                </CardActions>
            </Card>
            </CardActionArea>

        </Grid>
        <Grid item 
        xs={12}
        sm={6}
        md={4}
        lg={3}>

            <CardActionArea>
            <Card sx={{ width: 350 }}>
                <CardMedia
                component="img"
                image="https://th.bing.com/th/id/R.d76a8fe4c4b0eb8735c5b04cdf964afd?rik=mu0gCnV89zKbJw&pid=ImgRaw&r=0"
                title=""
                height="300"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                JACOBO GRINBERG: Desaparecio de la faz de la tierra
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus soluta sed deleniti saepe voluptatum culpa unde explicabo fugiat ipsa repellendus provident quo at, ducimus eligendi, quibusdam nam suscipit a!
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Compartir</Button>
                <Button variant="contained" size="small">Leer mas</Button>
                </CardActions>
            </Card>
            </CardActionArea>

          </Grid>
          <Grid item 
          xs={12}
          sm={6}
          md={4}
          lg={3}>
            <CardActionArea>
            <Card sx={{ width: 350 }}>
                <CardMedia
                component="img"
                image="https://th.bing.com/th/id/OIP.At3dU3pXeDS8Ts8WqXMleAHaFj?pid=ImgDet&rs=1"
                title=""
                height="300"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                STANLEY MEYER: Invento el carro a motor de agua
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus soluta sed deleniti saepe voluptatum culpa unde explicabo fugiat ipsa repellendus provident quo at, ducimus eligendi, quibusdam nam suscipit a!
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Compartir</Button>
                <Button variant="contained" size="small">Leer mas</Button>
                </CardActions>
            </Card>
            </CardActionArea>
          </Grid>

          <Grid 
            item 
            xs ={12}
            sm ={6}
            md ={4}
            lg ={3}
            >
            <CardActionArea>
            <Card sx={{ width: 350 }}>
                <CardMedia
                component="img"
                image="https://th.bing.com/th/id/R.c7ad6a3b12d29f5510a192f3d85c2a89?rik=tSkPAjsFqjAfTA&riu=http%3a%2f%2fwww.damientech.com%2fwp-content%2fuploads%2f2019%2f03%2fTesla.jpeg&ehk=XWgicB2VrVs60gTC1hawhioyIJ1gGMvmktFHtKT75s4%3d&risl=&pid=ImgRaw&r=0"
                title=""
                height="300"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Nicolas Tesla: Entrevista al periodista llamado John Smith en 1899
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus soluta sed deleniti saepe voluptatum culpa unde explicabo fugiat ipsa repellendus provident quo at, ducimus eligendi, quibusdam nam suscipit a!
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Compartir</Button>
                <Button variant="contained" size="small">Leer mas</Button>
                </CardActions>
            </Card>
            </CardActionArea>
            </Grid>

            <Grid 
            item 
            xs ={12}
            sm ={6}
            md ={4}
            lg ={3}
            >
            <CardActionArea>
            <Card sx={{ width: 350 }}>
                <CardMedia
                component="img"
                image="https://th.bing.com/th/id/OIP.BITZPK_rr8_3mqt36GA9cQAAAA?pid=ImgDet&rs=1"
                title=""
                height="300"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                JOB INCOGNITO: La serie que cancelaron por revelar informacion sobre la elite mundial.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus soluta sed deleniti saepe voluptatum culpa unde explicabo fugiat ipsa repellendus provident quo at, ducimus eligendi, quibusdam nam suscipit a!
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Compartir</Button>
                <Button variant="contained" size="small">Leer mas</Button>
                </CardActions>
            </Card>
            </CardActionArea>
            </Grid>

            <Grid 
            item 
            xs ={12}
            sm ={6}
            md ={4}
            lg ={3}
            >
            <CardActionArea>
            <Card sx={{ width: 350 }}>
                <CardMedia
                component="img"
                image="https://th.bing.com/th/id/OIP.xilMkTUqPseFA3pk4H-2ywHaLH?w=197&h=296&c=7&r=0&o=5&dpr=1.1&pid=1.7"
                title=""
                height="300"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                LANA DEL REY: Reina vintage o Bad girl
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus soluta sed deleniti saepe voluptatum culpa unde explicabo fugiat ipsa repellendus provident quo at, ducimus eligendi, quibusdam nam suscipit a!
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Compartir</Button>
                <Button variant="contained" size="small">Leer mas</Button>
                </CardActions>
            </Card>
            </CardActionArea>
            </Grid>

            <Grid 
            item 
            xs ={12}
            sm ={6}
            md ={4}
            lg ={3}
            >
            <CardActionArea>
            <Card sx={{ width: 350 }}>
                <CardMedia
                component="img"
                image="https://th.bing.com/th/id/R.64f7861cd0c65c80b3e7c44831617c92?rik=ci9NaSi9%2bAO2Wg&pid=ImgRaw&r=0"
                title=""
                height="300"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                ROBERT SMITH: Logra que le devuelven a sus fans los cargos extras en la venta de entradas de su proxima gira
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus soluta sed deleniti saepe voluptatum culpa unde explicabo fugiat ipsa repellendus provident quo at, ducimus eligendi, quibusdam nam suscipit a!
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Compartir</Button>
                <Button variant="contained" size="small">Leer mas</Button>
                </CardActions>
            </Card>
            </CardActionArea>
            </Grid>

            <Grid 
            item 
            xs ={12}
            sm ={6}
            md ={4}
            lg ={3}
            >
            <CardActionArea>
            <Card sx={{ width: 350 }}>
                <CardMedia
                component="img"
                image="https://th.bing.com/th/id/R.58f5422b85d0d02cd5492f56f73d0f2a?rik=XUg396zl4iEGjg&pid=ImgRaw&r=0"
                title=""
                height="300"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Los Fundamentalistas: Cuanto sale una entrada del Dj Hernan Cattaneo
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus soluta sed deleniti saepe voluptatum culpa unde explicabo fugiat ipsa repellendus provident quo at, ducimus eligendi, quibusdam nam suscipit a!
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Compartir</Button>
                <Button variant="contained" size="small">Leer mas</Button>
                </CardActions>
            </Card>
            </CardActionArea>
            </Grid>
            <Grid 
            item 
            xs ={12}
            sm ={6}
            md ={4}
            lg ={3}
            >
            <CardActionArea>
            <Card sx={{ width: 350 }}>
                <CardMedia
                component="img"
                image="https://i.ytimg.com/vi/qHqK_1qDkA0/maxresdefault.jpg"
                title=""
                height="300"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Como activar el Tercer Ojo: 5 Tecnicas
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus soluta sed deleniti saepe voluptatum culpa unde explicabo fugiat ipsa repellendus provident quo at, ducimus eligendi, quibusdam nam suscipit a!
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Compartir</Button>
                <Button variant="contained" size="small">Leer mas</Button>
                </CardActions>
            </Card>
            </CardActionArea>
            </Grid>

            <Grid 
            item 
            xs ={12}
            sm ={6}
            md ={4}
            lg ={3}
            >
            <CardActionArea>
            <Card sx={{ width: 350 }}>
                <CardMedia
                component="img"
                image="https://th.bing.com/th/id/OIP.EVByZp_6WiHFSMIcdYnWTQHaEK?pid=ImgDet&rs=1"
                title=""
                height="300"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Inteligencia Akashica: Sadhguru
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus soluta sed deleniti saepe voluptatum culpa unde explicabo fugiat ipsa repellendus provident quo at, ducimus eligendi, quibusdam nam suscipit a!
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Compartir</Button>
                <Button variant="contained" size="small">Leer mas</Button>
                </CardActions>
            </Card>
            </CardActionArea>
            </Grid>

            <Grid 
            item 
            xs ={12}
            sm ={6}
            md ={4}
            lg ={3}
            >
            <CardActionArea>
            <Card sx={{ width: 350 }}>
                <CardMedia
                component="img"
                image="https://th.bing.com/th/id/OIP.3b8HE7_cZAvx6qSf4klMlQHaHa?pid=ImgDet&rs=1"
                title=""
                height="300"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                El despertar es conocer tu origen
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus soluta sed deleniti saepe voluptatum culpa unde explicabo fugiat ipsa repellendus provident quo at, ducimus eligendi, quibusdam nam suscipit a!
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Compartir</Button>
                <Button variant="contained" size="small">Leer mas</Button>
                </CardActions>
            </Card>
            </CardActionArea>
            </Grid>

            <Grid 
            item 
            xs ={12}
            sm ={6}
            md ={4}
            lg ={3}
            >
            <CardActionArea>
            <Card sx={{ width: 350 }}>
                <CardMedia
                component="img"
                image="https://th.bing.com/th/id/OIP.h_FXdHZXOp25bHJ6fZR1igHaLH?pid=ImgDet&rs=1"
                title=""
                height="300"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Irreversible: Monica Belucci sufrio por 9 minutos esto hizo que 200 personas abadonar la sala del Festiva Cannes en 2002
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus soluta sed deleniti saepe voluptatum culpa unde explicabo fugiat ipsa repellendus provident quo at, ducimus eligendi, quibusdam nam suscipit a!
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Compartir</Button>
                <Button variant="contained" size="small">Leer mas</Button>
                </CardActions>
            </Card>
            </CardActionArea>
            </Grid>

            <Grid 
            item 
            xs ={12}
            sm ={6}
            md ={4}
            lg ={3}
            >
            <CardActionArea>
            <Card sx={{ width: 350 }}>
                <CardMedia
                component="img"
                image="https://th.bing.com/th/id/R.9d57d148f586b3f3ac6006f1cf6d1481?rik=7pSti%2bb3ki3xjw&riu=http%3a%2f%2fstatic.t13.cl%2fimages%2foriginal%2f2017%2f06%2f1496339440-sense8-067.jpg&ehk=uK25BuqWnP1U0tmxRnuVhy%2bInxUyj8v4KMOifLiV92o%3d&risl=&pid=ImgRaw&r=0"
                title=""
                height="300"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                SENSE 8: La serie de Netflix que cuenta la historia de Seres sensoriales, conectados telepaticamente
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus soluta sed deleniti saepe voluptatum culpa unde explicabo fugiat ipsa repellendus provident quo at, ducimus eligendi, quibusdam nam suscipit a!
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Compartir</Button>
                <Button variant="contained" size="small">Leer mas</Button>
                </CardActions>
            </Card>
            </CardActionArea>
            </Grid>

            <Grid 
            item 
            xs ={12}
            sm ={6}
            md ={4}
            lg ={3}
            >
            <CardActionArea>
            <Card sx={{ width: 350 }}>
                <CardMedia
                component="img"
                image="https://assets.cdn.moviepilot.de/files/b2f99344d53d09194463c5838374647c7d01e7fe4b3b8010429ebdab8caa/fill/992/477/mp1.jpg"
                title=""
                height="300"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                ¿Quiénes eran los ‘Peaky Blinders’? La historia real detrás de la serie
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus soluta sed deleniti saepe voluptatum culpa unde explicabo fugiat ipsa repellendus provident quo at, ducimus eligendi, quibusdam nam suscipit a!
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Compartir</Button>
                <Button variant="contained" size="small">Leer mas</Button>
                </CardActions>
            </Card>
            </CardActionArea>
            </Grid>

            <Grid 
            item 
            xs ={12}
            sm ={6}
            md ={4}
            lg ={3}
            >
            <CardActionArea>
            <Card sx={{ width: 350 }}>
                <CardMedia
                component="img"
                image="https://th.bing.com/th/id/R.0ba6c5f72bce2acfb17ef387a3aa002b?rik=BjgUgT7Nf0CIRQ&riu=http%3a%2f%2fes.web.img3.acsta.net%2fr_1280_720%2fmedias%2fnmedia%2f18%2f65%2f54%2f67%2f19816086.jpg&ehk=pTyJGiCJ5uEA0t0HN4kJFi7H7KrvqISyHiCBxZK67Ws%3d&risl=&pid=ImgRaw&r=0"
                title=""
                height="300"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Elije la Vida..Trainsportting 02
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus soluta sed deleniti saepe voluptatum culpa unde explicabo fugiat ipsa repellendus provident quo at, ducimus eligendi, quibusdam nam suscipit a!
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Compartir</Button>
                <Button variant="contained" size="small">Leer mas</Button>
                </CardActions>
            </Card>
            </CardActionArea>
            </Grid>
        </Grid>
    </Container>
  )
}

export default CardsTodas
