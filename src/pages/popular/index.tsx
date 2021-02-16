import React, { useEffect, useState } from 'react';
import { MoviesList } from '../../components/movies-list';
import { API } from '../../api';
import { Movie } from '../../models';

const PopularPage = () => {
  const [list, setList] = useState<Movie[]>([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await API.getList();
        setList(res.results);
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);
  return (
    <div>
      <MoviesList movies={list}/>
    </div>
  )
}

export {
  PopularPage,
}