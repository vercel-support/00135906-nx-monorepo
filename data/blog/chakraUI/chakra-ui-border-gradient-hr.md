---
title: Chakra ui border gradient hr
date: '2022-09-22'
summary: 'Here is how I added a custom gradient to a divider ChakraUI component'
tags: ['react', 'chakraUI', 'gradient', divider]
draft: false
---

```css
.borderDividerGradientBrand {
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), #e4b473, rgba(0, 0, 0, 0));
  border-bottom-width: 0 !important;
}
```

## Full solution

```js
//index.js
import { Divider, Center } from '@chakra-ui/react'
import mainStyles from '../styles/Main.module.css'

const CustomChakraDivider = () => {
  return (
    <Flex
      height="100%"
      direction="column"
      alignItems="center"
      justifyContent="center"
      width="100vw"
    >
      <Center>
        <Divider
          orientation="horizontal"
          className={mainStyles.borderDividerGradientBrand}
          width="40%"
        />
      </Center>
    </Flex>
  )
}

export default CustomChakraDivider
```

I'm working to improve on a ChakraUI only solution.