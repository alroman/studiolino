import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  flex-direction: column;
  height: 100%;

  div {
    font-size: 3rem;
    line-height: 1;

    &.small {
      margin-left: 20px;
      font-size: 2.2rem;
    }
  }

`
const IndexPage = () => (
  <Layout>
    <SEO title="Studiolino" />
    <Main>
      <div>ス</div><div>タ</div><div>デ</div><div className='small'>ィ</div><div>オ</div><div>リ</div><div>ノ</div>
    </Main>
  </Layout>
)

export default IndexPage
