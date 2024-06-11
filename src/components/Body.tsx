import './Body.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../../public/mobileapp.jpg"
import "../../public/mobilleinterface.jpg"
import "../../public/imgcurso.jpg"
import "../../public/desarrollo.png"

function Body() {
  
    return (
      <>
      <div>
        <h2 className='titulobody'>
            About me
        </h2>
      </div>
      <div className='card-container'>
       <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="mobileapp.jpg"
        title="skills"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Skills
        </Typography>
        <Typography variant="body2" color="text.secondary">
          El desarrollador posee una motivación para adaptarse a cualquier método o lenguaje de ser necesario
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="mobilleinterface.jpg"
        title="languages"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Programming languages
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Posee conocimientos de React-Native, Html, CSS, Java, Webcomponents, JavaScript, PHP, Firebase, Visual Studio Code, Atom
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="imgcurso.jpg"
        title="experience"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Experience
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Estudiado en la E.P.E.T. n°20, con pasantias en El Ministerio de Desarrollo del lado de niños, adolescentes y familia
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="desarrollo.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          About now
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Actualmente estudiando en el segundo año de la carreara Full Stack del its, Motivado a seguir en el área de Frontend pero flexible para poder estudiar y aprender el área de Backend
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
      </>
    )
  }
  
  export default Body


