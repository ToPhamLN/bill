import { Button, Grid, GridItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { path } from '~/constants/routes';
const Home = () => {
  return (
    <>
      <div className='title' style={{ marginTop: '2rem' }}>
        <h1>Tùy chọn Fake bill chuyển tiền ngân hàng</h1>
      </div>
      <Grid
        templateColumns='repeat(auto-fit, minmax(200px, 1fr))'
        gap={4}
        p={4}
      >
        {Object.keys(path)
          .filter((key) => key !== 'Home')
          .map((key) => (
            <GridItem key={key}>
              <Button
                as={Link}
                to={path[key]}
                w='100%'
                h='100px'
                variant='solid'
                colorScheme='teal'
              >
                {key}
              </Button>
            </GridItem>
          ))}
      </Grid>
    </>
  );
};

export default Home;
