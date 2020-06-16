import React from 'react';
import { Flex, Box } from 'rebass';
import { Gap } from '@components/gap/Gap';
import { useSelector } from 'react-redux';
import { GlobalState } from '@store/index';
import { LoadingComponent } from '@components/loading/Loading';
import { useLocation } from 'react-router-dom';

const Book = (): JSX.Element => {

  const { appLoading } = useSelector((state: GlobalState) => state.appReducer);

  const { state: { id } } = useLocation();

  return (
    <>
      <Gap size={30} />
      {appLoading ? <LoadingComponent /> :
        <Flex mx={-2}>
          <Box width={1 / 6} px={2}>
          </Box>
          <Box width={1} px={2}>
            {id}
          </Box>
          <Box width={1 / 6} px={2}>
          </Box>
        </Flex>
      }
    </>
  );
};

export default Book;
