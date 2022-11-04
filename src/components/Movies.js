import React from 'react'
import styled from 'styled-components'
import { selectMovies } from "../features/movie/movieSlice"
import { useSelector } from "react-redux"

function Movies() {

    const movies = useSelector(selectMovies);

    //The first content movies.map is where is we getting the database info from, in order to show the reccomenden
    //in this case, I only have one element at my firebase which is Inside Out movie.
  return (
    <Container>
        <h4>Recommended for you</h4>
        <Content>
            
            { movies &&
            
                movies.map((movie)=>(
                    <Wrap key={movie.id}>
                    <img src={movie.cardImg}></img> 
                    </Wrap>
                ))
            }
            <Wrap>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg"></img>
            </Wrap>
            <Wrap>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg"></img>
            </Wrap>
            <Wrap>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg"></img>
            </Wrap>
        </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div`
    
`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0,1fr));

`

const Wrap = styled.div`
        border-radius: 10px;
        cursor: pointer;
        overflow: hidden;
        border: 3px solid rgba(249, 249, 249, 0.1);
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

        img{
            width: 100%;
            height 100%;
            object-fit: cover;
        }

        &:hover{
            transform: scale(1.05);
            rgb(0 0 0 / 72%) 0px 30px 22px -10px;
            border-color: rgba(249, 249, 249, 0.8);
        }
`