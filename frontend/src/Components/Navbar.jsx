import { useState } from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { isOpen, onToggle } = useDisclosure();

  return (
      <Box>
            
      </Box>
  );  
};

export default Navbar;
