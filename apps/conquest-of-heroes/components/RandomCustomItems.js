import { useState } from 'react';
import DynamicObjectComponent from '../components/DynamicObjectComponent';
import { CustomItems } from '../categories/CustomItems';
import { Grid, Button, VStack, Heading, Flex, Icon } from '@chakra-ui/react';
import generateCustomItem from '../utils/generateCustomItem';
import { WiRefresh } from 'react-icons/wi';

const generateCustomItems = (count) => {
  const items = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * CustomItems.length);
    const { name, type, effects } = CustomItems[randomIndex];
    // Make a copy of the shared effects to avoid modifying the original array
    const copiedEffects = [...effects];
    const randomItem = generateCustomItem(name, type, copiedEffects);
    items.push({ ...randomItem, locked: false });
  }
  return items;
};

const RandomCustomItems = () => {
  const [items, setItems] = useState(generateCustomItems(10));

  const toggleLock = (index) => {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, locked: !item.locked } : item
      )
    );
  };
  const refreshItems = () => {
    const newItems = items.map((item, index) =>
      item.locked ? item : generateCustomItems(1)[0]
    );
    setItems(newItems);
  };

  console.log(`items`, items);

  return (
    <VStack spacing={4} align="left" pb={24} pt={8}>
      <Flex alignItems="center">
        <Heading mr={2}>Custom Item List (10)</Heading>
        <button
          onClick={refreshItems}
          variant="ghost"
          _hover={{ background: 'transparent' }}
        >
          <Icon
            as={WiRefresh}
            boxSize={10} // Adjust the size as needed
            color="light-green"
            _hover={{ color: 'darkGreen' }}
          />
        </button>
      </Flex>

      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          lg: 'repeat(2, 1fr)',
        }}
        gap={6}
      >
        {items.map((item, index) => (
          <DynamicObjectComponent
            key={index}
            data={item}
            onClick={() => toggleLock(index)}
            locked={item.locked}
          />
        ))}
      </Grid>
    </VStack>
  );
};

export default RandomCustomItems;
