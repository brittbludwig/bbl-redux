import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FormProvider, SectionProvider, StarProvider } from '$providers';
import { Home, NotFound } from '$routes';

const App: React.FC = () => {
  return (
    <StarProvider>
      <SectionProvider>
        <FormProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </FormProvider>
      </SectionProvider>
    </StarProvider>
  );
};

export default App;