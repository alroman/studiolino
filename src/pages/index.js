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
  font-family: sans-serif;
  
  color: white;
  width: 75px;
  margin: auto;

  .sl {
    margin: auto;
    padding: 10px;
    background-color: tomato;
    writing-mode: vertical-rl;
    font-size: 3rem;
    line-height: 1;
  }

`
const IndexPage = () => (
  <Layout>
    <SEO title="Studiolino.com" />
    <Main>
      <div className='sl'>スタディオリノ</div>
    </Main>
  </Layout>
)

export default IndexPage
