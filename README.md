# emf-product-card

This is a deployment test package in NPM

### Enrique Marín

## Ejemplo:

```
import {
	ProductCard,
	ProductImage,
	ProductTitle,
	ProductButtons,
} from 'emf-product-card';
```

```
<ProductCard
    product={product}
    initialValues={{
        count: 4,
        maxCount: 10,
    }}
>
    {({ reset, isMaxCountReaced, count, increaseBy, maxCount }) => (
        <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
        </>
    )}
</ProductCard>
```