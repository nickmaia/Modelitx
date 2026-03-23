import {
  ChakraProvider
} from '@chakra-ui/react';
import React, {
  createContext
} from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import {
  useState
} from 'react';
import HeroPage from './Pages/HeroPage';
import UploadFilePage from './Pages/UploadFilePage';
import TypeFunctionPage from './Pages/TypeFunctionPage';
import GraphicResult from './Pages/GraphicResult';

export const GraphContext = createContext();

function App() {

  const [graphData, setGraphData] = useState(null);
  const [graphType, setGraphType] = useState(null);
  const [graphFormulae, setGraphFormulae] = useState(null);

  return (
    <Router>
      <ChakraProvider>
        <GraphContext.Provider value={{
          graphType, setGraphType,
          graphData, setGraphData,
          graphFormulae, setGraphFormulae
        }}>
          <Routes>

            <Route path="/" element={<HeroPage />} exact />

            <Route path="/TypeFunctionPage" element={<TypeFunctionPage />} />

            <Route path="/UploadFilePage" element={<UploadFilePage />} />

            <Route path="/GraphicResultPage" element={<GraphicResult />} />

          </Routes>
        </GraphContext.Provider>
      </ChakraProvider>
    </Router>
  );
}

export default App;
