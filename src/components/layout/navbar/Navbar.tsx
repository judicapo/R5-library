import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useAuth0 } from '@middleware/authorization';
import { Flex, Text, Box, Button, Image } from 'rebass';

const NavbarComponent = () => {
  const { isLoading, user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <header>
      <Flex
        px={2}
        color='white'
        bg='black'
        alignItems='center'
        maxHeight='60px'
        minHeight='60px'>
        <Link to={'/'}>
          <Text p={2} color='white' fontWeight='bold'>R5 Library</Text>
        </Link>
        <Box mx='auto' />
        {user && user.picture && <Image minHeight={50} maxHeight={50}
          src={user.picture} alt='My Avatar' />}
        {!isLoading && !user &&
          <Button onClick={loginWithRedirect}>
            Sign In
          </Button>
        }
        {!isLoading && user && isAuthenticated && (
          <>
            <Link to={'/Profile'}>
              <Text px={2} color='white'>{user.name}</Text>
            </Link>
            <Button onClick={() => logout({ returnTo: window.location.origin })}>
              Sign Out
            </Button>
          </>
        )}
      </Flex>
    </header>
  );
};
export default withRouter(NavbarComponent);
