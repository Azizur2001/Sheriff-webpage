// import React, { useState } from 'react';
// import { Container, Grid, Card, CardMedia, CardActionArea, Dialog, IconButton, Typography, Box } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import image1 from '../../images/hair.png'; // Main image for Classic Fade
// import image2 from '../../images/subimage.png'; // Additional angle for Classic Fade
// import image3 from '../../images/subimage2.png'; // Main image for Pompadour
// import image4 from '../../images/subimage3.png'; // Additional angle for Pompadour
// import image5 from '../../images/new_hair.png'; // Main image for Classic Fade
// import image6 from '../../images/new_hair_sub.png'; // Main image for Classic Fade
// import image7 from '../../images/new_hairsub2.png'; // Main image for Classic Fade
// import image8 from '../../images/new_hairsub3.png'; // Main image for Classic Fade
// import image9 from '../../images/new_hairsub4.png'; // Main image for Classic Fade
// import backgroundImage from '../../images/barbertools.png';

// const Gallery = () => {
//   const [selectedImages, setSelectedImages] = useState([]);
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);
//   const [open, setOpen] = useState(false);

//   const haircuts = [
//     {
//       title: 'Classic Fade',
//       images: [image1, image2, image3, image4], // Array of images for Classic Fade
//     },
//   ];

//   const openModal = (images, index) => {
//     setSelectedImages(images);
//     setSelectedImageIndex(index);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleNext = () => {
//     setSelectedImageIndex((prevIndex) => (prevIndex + 1) % selectedImages.length);
//   };

//   const handlePrev = () => {
//     setSelectedImageIndex((prevIndex) =>
//       prevIndex === 0 ? selectedImages.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: '86vh',
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         py: 8,
//         px: 2,
//         width: '100vw',
//         position: 'relative',
//         left: '50%',
//         transform: 'translateX(-50%)'
//       }}
//     >
//       <Container 
//         maxWidth="md" 
//         sx={{ 
//           mt: 4, 
//           mb: { xs: 8, md: 12 } 
//         }}
//       >
//         <Grid container spacing={4}>
//           {haircuts.map((haircut, haircutIndex) => (
//             <Grid item xs={12} sm={6} md={4} key={haircutIndex}>
//               <Card>
//                 <CardActionArea onClick={() => openModal(haircut.images, 0)}>
//                   <CardMedia
//                     component="img"
//                     alt={haircut.title}
//                     height="300"
//                     image={haircut.images[0]}
//                     title={haircut.title}
//                   />
//                   <Box 
//                     sx={{ 
//                       position: 'absolute', 
//                       bottom: 0, 
//                       left: 0, 
//                       right: 0, 
//                       backgroundColor: 'rgba(0, 0, 0, 0.5)', 
//                       color: 'white', 
//                       textAlign: 'center', 
//                       p: 1 
//                     }}
//                   >
//                     <Typography variant="subtitle1">{haircut.title}</Typography>
//                   </Box>
//                 </CardActionArea>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>

//         <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
//           <Box position="relative">
//             <IconButton
//               sx={{
//                 position: 'absolute',
//                 top: 8,
//                 right: 8,
//                 color: 'white',
//               }}
//               onClick={handleClose}
//             >
//               <CloseIcon />
//             </IconButton>

//             <Box display="flex" alignItems="center" justifyContent="center" sx={{ position: 'relative', height: { xs: '400px', md: '600px' } }}>
//               <IconButton
//                 sx={{
//                   position: 'absolute',
//                   left: 16,
//                   color: 'white',
//                 }}
//                 onClick={handlePrev}
//               >
//                 <ArrowBackIosIcon />
//               </IconButton>

//               <img
//                 src={selectedImages[selectedImageIndex]}
//                 alt={`Angle ${selectedImageIndex + 1}`}
//                 style={{
//                   width: '100%',
//                   height: 'auto%',
//                   maxHeight: '120%',
//                   maxWidth: { xs: '100%', md: '90%' },
//                 }}
//               />

//               <IconButton
//                 sx={{
//                   position: 'absolute',
//                   right: 16,
//                   color: 'white',
//                 }}
//                 onClick={handleNext}
//               >
//                 <ArrowForwardIosIcon />
//               </IconButton>
//             </Box>
//           </Box>
//         </Dialog>
//       </Container>
//     </Box>
//   );
// };

// export default Gallery;



import React, { useState } from 'react';
import { Container, Grid, Card, CardMedia, CardActionArea, Dialog, IconButton, Typography, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import image1 from '../../images/hair.png'; // Main image for Classic Fade
import image2 from '../../images/subimage.png'; // Additional angle for Classic Fade
import image3 from '../../images/subimage2.png'; // Main image for Pompadour
import image4 from '../../images/subimage3.png'; // Additional angle for Pompadour
import image5 from '../../images/new_hair.png'; // Main image for New Style
import image6 from '../../images/new_hair_sub.png'; // Additional angle 1 for New Style
import image7 from '../../images/new_hairsub2.png'; // Additional angle 2 for New Style
import image9 from '../../images/new_hairsub4.png'; // Additional angle 4 for New Style
import backgroundImage from '../../images/barbertools.png';

const Gallery = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const haircuts = [
    {
      title: 'Classic Fade',
      images: [image1, image2, image3, image4], // Array of images for Classic Fade
    },
    {
      title: 'New Style',
      images: [image5, image6, image7, image9], // Array of images for New Style
    },
  ];

  const openModal = (images, index) => {
    setSelectedImages(images);
    setSelectedImageIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % selectedImages.length);
  };

  const handlePrev = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box
      sx={{
        minHeight: '86vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 8,
        px: 2,
        width: '100vw',
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)'
      }}
    >
      <Container 
        maxWidth="md" 
        sx={{ 
          mt: 4, 
          mb: { xs: 8, md: 12 } 
        }}
      >
        <Grid container spacing={4}>
          {haircuts.map((haircut, haircutIndex) => (
            <Grid item xs={12} sm={6} md={4} key={haircutIndex}>
              <Card>
                <CardActionArea onClick={() => openModal(haircut.images, 0)}>
                  <CardMedia
                    component="img"
                    alt={haircut.title}
                    height="300"
                    image={haircut.images[0]}
                    title={haircut.title}
                  />
                  <Box 
                    sx={{ 
                      position: 'absolute', 
                      bottom: 0, 
                      left: 0, 
                      right: 0, 
                      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                      color: 'white', 
                      textAlign: 'center', 
                      p: 1 
                    }}
                  >
                    <Typography variant="subtitle1">{haircut.title}</Typography>
                  </Box>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          <Box position="relative">
            <IconButton
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                color: 'white',
              }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>

            <Box display="flex" alignItems="center" justifyContent="center" sx={{ position: 'relative', height: { xs: '400px', md: '600px' } }}>
  <IconButton
    sx={{
      position: 'absolute',
      left: 16,
      color: 'white',
    }}
    onClick={handlePrev}
  >
    <ArrowBackIosIcon />
  </IconButton>

  <img
    src={selectedImages[selectedImageIndex]}
    alt={`Angle ${selectedImageIndex + 1}`}
    style={{
      width: '100%',
      height: '100%',  // Ensures the image covers the height of the container
      objectFit: 'cover',  // Scales the image to cover the entire box while preserving aspect ratio
      maxHeight: '100%',
      maxWidth: '100%',
    }}
  />

  <IconButton
    sx={{
      position: 'absolute',
      right: 16,
      color: 'white',
    }}
    onClick={handleNext}
  >
    <ArrowForwardIosIcon />
  </IconButton>
</Box>

          </Box>
        </Dialog>
      </Container>
    </Box>
  );
};

export default Gallery;
