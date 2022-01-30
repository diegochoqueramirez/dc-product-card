# DC-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Diego Choque

## Ejemplo

```
<ProductCard
  product={product}
  initialValues={{
    count: 4,
    maxCount: 10,
  }}
>
  {({ reset, increaseBy, isMaxCountReached, count }) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>

```
