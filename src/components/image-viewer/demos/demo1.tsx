import React, { useState } from 'react'
import { ImageViewer, Button } from 'antd-mobile'
import { DemoBlock } from 'demos'
import { demoImage, demoImages } from './images'

// 单张图片预览
const Single = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Button
        onClick={() => {
          setVisible(true)
        }}
      >
        显示图片
      </Button>
      <ImageViewer
        image={demoImage}
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
      />
    </>
  )
}

// 多张图片预览
const Multi = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Button
        onClick={() => {
          setVisible(true)
        }}
      >
        显示图片
      </Button>
      <ImageViewer.Multi
        images={demoImages}
        visible={visible}
        defaultIndex={1}
        onClose={() => {
          setVisible(false)
        }}
      />
    </>
  )
}

// 自定义footer
const ViewWithFooter = () => {
  const [imageVisible, setImageVisible] = useState(false)
  const [multiVisible, setMultiVisible] = useState(false)

  const renderFooter = (image: string, index?: number) => {
    return (
      <div style={{ textAlign: 'center' }}>
        <Button
          color='primary'
          fill='outline'
          onClick={() => {
            console.log('Loading...')
          }}
        >
          查看原图{index !== undefined ? index + 1 : ''}
        </Button>
      </div>
    )
  }

  return (
    <>
      <Button
        onClick={() => {
          setImageVisible(true)
        }}
      >
        单张图片
      </Button>
      <ImageViewer
        image={demoImage}
        visible={imageVisible}
        onClose={() => {
          setImageVisible(false)
        }}
        renderFooter={renderFooter}
      />
      <Button
        onClick={() => {
          setMultiVisible(true)
        }}
      >
        多张图片
      </Button>
      <ImageViewer.Multi
        images={demoImages}
        visible={multiVisible}
        defaultIndex={1}
        onClose={() => {
          setMultiVisible(false)
        }}
        renderFooter={renderFooter}
      />
    </>
  )
}

export default () => {
  return (
    <>
      <DemoBlock title='单张图片预览'>
        <Single />
      </DemoBlock>

      <DemoBlock title='多张图片预览'>
        <Multi />
      </DemoBlock>

      <DemoBlock title='指令式调用'>
        <Button
          onClick={() => {
            ImageViewer.Multi.show({ images: demoImages })
          }}
        >
          显示图片
        </Button>
      </DemoBlock>

      <DemoBlock title='手动控制关闭'>
        <Button
          onClick={() => {
            const handler = ImageViewer.show({
              image: demoImage,
            })
            setTimeout(() => {
              handler.close()
            }, 3000)
          }}
        >
          显示图片并在3秒后关闭
        </Button>
      </DemoBlock>

      <DemoBlock title='自定义footer'>
        <ViewWithFooter />
      </DemoBlock>
    </>
  )
}
