import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Image, Input, Button, Icon, Table } from 'semantic-ui-react'
import { useContext } from 'react'
import { CounterContext } from 'context/CounterContext'
const ProductPage = () => {
  const [product, setProduct] = useState<TProduct>()
  const { updateCounter, counter} = useContext(CounterContext)
  const [quanty, setQuanty] = useState<number>(0)
  const [showAdd, setShowAdd] = useState<boolean>(false)
  // router
  const {
    query: { id },
  } = useRouter()

  useEffect(() => {
    if (id) {
      window
        .fetch(`/api/avo/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
    }
  }, [id])
  //console.log(product)
  useEffect(() => {
    setShowAdd(true)
    setTimeout(()=>{
      setShowAdd(false)
    },1000)


  }, [counter])

  const handleCart = () => {
    updateCounter(quanty)
  }
  const handleChange = (event: object) => {
    setQuanty(Number(event.target.value))
  }
  return (
    <section className='justify-center'>
      <div className='flex flex-col w-full px-8 '>
        <div className='flex items-center justify-center'>
          <Image src={product?.image} size='medium' rounded />
          <div className='flex flex-col '>
            <div className='text-2xl font-semibold mb-5'>{product?.name}</div>
            <div className='text-lg'>{product?.price}</div>
            <div className='text-sm bg-gray-300 w-1/3 px-2 rounded mb-8'>{product?.sku}</div>
            <Input
              action={{
                color: 'teal',
                labelPosition: 'left',
                icon: 'cart',
                content: 'Add to Cart',
                onClick: handleCart
              }}
              placeholder='quanty'
              defaultValue='1'
              onChange={handleChange}
            />
            {showAdd && <div><Icon disabled name='check' color='teal'  /> add to cart </div> }
          </div>
        </div>
        <div className='flex flex-col mx-12 '>
          <div className='text-xl font-semibold mb-4'>About this avocado</div>
          <div className='w-full'>{product?.attributes.description}</div>
          <Table celled >
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan='3'>Attributes</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell >
                  Shape
                </Table.Cell>
                <Table.Cell>{product?.attributes.shape}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell >
                  Hardiness
                </Table.Cell>
                <Table.Cell>{product?.attributes.hardiness}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell >
                  Taste
                </Table.Cell>
                <Table.Cell>{product?.attributes.taste}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>


        </div>
      </div>
    </section>
  )
}

export default ProductPage
