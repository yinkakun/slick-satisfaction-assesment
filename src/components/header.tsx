import React from 'react';
import * as Chakra from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { Container } from '@/components/container';

const MotionBox = motion<Chakra.BoxProps>(Chakra.Box);
const MotionStack = motion<Chakra.StackProps>(Chakra.Stack);
const MotionText = motion<Chakra.TextProps>(Chakra.Text);
const MotionLink = motion<Chakra.LinkProps>(Chakra.Link);
const MotionCollapse = motion<Chakra.CollapseProps>(Chakra.Collapse);

const navItemMotion = {
  initial: { opacity: 0 },
  hover: { opacity: 1 },
};

export const Header = (): React.ReactElement => {
  const { isOpen, onOpen, onClose } = Chakra.useDisclosure();

  return (
    <Chakra.Box as="header" pt="40px">
      <Chakra.Flex
        alignItems="center"
        width="full"
        flexDirection="column"
        borderBottom={`1px solid ${
          isOpen ? 'transparent' : 'rgba(0, 0, 0, 0.5)'
        }`}
      >
        <Container
          alignItems="start"
          justifyContent="center"
          display={['none', 'none', 'flex']}
        >
          <Chakra.Flex alignSelf="stretch" width="full" onMouseLeave={onClose}>
            <Chakra.Stack width="full" onMouseEnter={onOpen}>
              <Chakra.Box width="fit-content" mb="auto">
                <Link to="/">
                  <StaticImage
                    src="../images/logo.png"
                    alt="logo"
                    onMouseEnter={onOpen}
                    onMouseLeave={onClose}
                  />
                </Link>
              </Chakra.Box>

              <Chakra.Box onMouseEnter={onOpen}>
                <Chakra.Box>
                  <Chakra.Collapse in={isOpen} animateOpacity>
                    <Chakra.Box>
                      <Chakra.Text>Social</Chakra.Text>
                      <Chakra.Stack marginTop="20px" spacing="5px">
                        {SOCIAL_LINKS.map(({ url, label, colorCode }) => (
                          <Chakra.Flex alignItems="center" key={label}>
                            <Chakra.Box
                              height="9px"
                              width="9px"
                              borderRadius="50%"
                              bg={colorCode}
                              marginRight="0.5rem"
                            />
                            <Chakra.Link href={url}>{label}</Chakra.Link>
                          </Chakra.Flex>
                        ))}
                      </Chakra.Stack>
                    </Chakra.Box>
                  </Chakra.Collapse>
                </Chakra.Box>
              </Chakra.Box>
            </Chakra.Stack>
          </Chakra.Flex>

          <Chakra.Grid
            templateColumns="repeat(4, 15rem)"
            marginLeft="auto"
            borderLeft={`1px solid ${isOpen ? 'black' : 'transparent'}`}
          >
            {NAV_ITEMS.map((item) => (
              <MotionBox
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
                paddingLeft="30px"
                initial="initial"
                whileHover="hover"
                animate="initial"
              >
                <Chakra.Text
                  display="inline-block"
                  key={item.label}
                  onMouseEnter={onOpen}
                  onMouseLeave={onClose}
                  fontWeight={500}
                  fontSize="lg"
                  pb="40px"
                  _hover={{
                    textDecoration: 'none',
                    color: 'black',
                  }}
                  color={`${isOpen ? 'rgba(0, 0, 0, 0.5)' : 'black'}`}
                  transition="color 300ms linear"
                >
                  {item.label}
                </Chakra.Text>
                <MotionBox variants={navItemMotion}>
                  <MotionCollapse in={isOpen}>
                    <MotionBox>
                      <Chakra.Box onMouseEnter={onOpen} minHeight="3rem">
                        <MotionText>{item?.sublabel}</MotionText>
                      </Chakra.Box>
                      <MotionStack spacing="5px">
                        {item?.children.map((childItem) => (
                          <MotionLink onMouseEnter={onOpen} width="fit-content">
                            {childItem.label}
                          </MotionLink>
                        ))}
                      </MotionStack>
                    </MotionBox>
                  </MotionCollapse>
                </MotionBox>
              </MotionBox>
            ))}
          </Chakra.Grid>
        </Container>
      </Chakra.Flex>
      <Chakra.Box
        bg="white"
        height="60px"
        display={isOpen ? 'block' : 'none'}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      />
    </Chakra.Box>
  );
};

type SocialLinks = {
  label: string;
  url: string;
  colorCode: string;
};

const SOCIAL_LINKS: Array<SocialLinks> = [
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/',
    colorCode: '#4B1427',
  },
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/',
    colorCode: '#EA1D25',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/',
    colorCode: '#1DA0EA',
  },
];

type NavItem = {
  label: string;
  sublabel?: string;
  href?: string;
  children?: Array<NavItem>;
};

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Projects',
    sublabel: 'Clients',
    children: [
      { label: 'All Clients', href: '#' },
      { label: 'Hospitality', href: '#' },
      { label: 'Retail', href: '#' },
      { label: 'Property', href: '#' },
      { label: 'Sports', href: '#' },
      { label: 'B2B', href: '#' },
    ],
  },
  {
    label: 'Studio',
    sublabel: 'Works',
    children: [
      { label: 'Architecture', href: '#' },
      { label: 'Branding', href: '#' },
      { label: 'Strategy', href: '#' },
      { label: 'Interior', href: '#' },
      { label: 'Digital', href: '#' },
    ],
  },
  {
    label: 'Red Plus',
    sublabel: 'Featured Works',
    children: [
      { label: 'Lorem ipsum ', href: '#' },
      { label: 'Dolor sit amet', href: '#' },
      { label: 'consectetur', href: '#' },
      { label: 'adipiscing elit', href: '#' },
      { label: 'A enim viverra nec', href: '#' },
      { label: 'orci lectus etiam ', href: '#' },
      { label: 'Venenatis consequat', href: '#' },
      { label: 'adipiscing massa nulla', href: '#' },
      { label: 'imperdiet quis pretium', href: '#' },
    ],
  },
  {
    label: 'Red Digital',
    children: [
      { label: 'Lorem ipsum ', href: '#' },
      { label: 'Dolor sit amet', href: '#' },
      { label: 'consectetur', href: '#' },
      { label: 'adipiscing elit', href: '#' },
      { label: 'A enim viverra nec', href: '#' },
      { label: 'orci lectus etiam ', href: '#' },
      { label: 'Venenatis consequat', href: '#' },
      { label: 'adipiscing massa nulla', href: '#' },
      { label: 'imperdiet quis pretium', href: '#' },
    ],
  },
];
