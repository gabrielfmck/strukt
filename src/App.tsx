import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/auth/AuthProvider';
import { ToastContainer } from 'react-toastify';
import Layout from './components/layout/Layout';
import PrivateRoute from './components/common/PrivateRoute';

import 'react-toastify/dist/ReactToastify.css';

// Componente de loading
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="flex flex-col items-center space-y-4">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      <p className="text-gray-600">Carregando...</p>
    </div>
  </div>
);

// Lazy loading das páginas
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Learn = lazy(() => import('./pages/Learn'));
const Algorithms = lazy(() => import('./pages/Algorithms'));
const DataStructures = lazy(() => import('./pages/DataStructures'));
const Practice = lazy(() => import('./pages/Practice'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Lazy loading das páginas de autenticação
const Login = lazy(() => import('./pages/auth/Login'));
const Register = lazy(() => import('./pages/auth/Register'));

// Lazy loading das páginas de aprendizado
const WhatIsProgramming = lazy(() => import('./pages/learn/WhatIsProgramming'));
const Variables = lazy(() => import('./pages/learn/Variables'));
const ControlStructures = lazy(() => import('./pages/learn/ControlStructures'));
const Arrays = lazy(() => import('./pages/learn/Arrays'));
const LinkedLists = lazy(() => import('./pages/learn/LinkedLists'));
const StacksQueues = lazy(() => import('./pages/learn/StacksQueues'));
const BubbleSort = lazy(() => import('./pages/learn/BubbleSort'));
const SelectionSort = lazy(() => import('./pages/learn/SelectionSort'));
const QuickSort = lazy(() => import('./pages/learn/QuickSort'));

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Layout>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                {/* Rotas públicas */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Rotas protegidas */}
                <Route
                  path="/learn"
                  element={
                    <PrivateRoute>
                      <Learn />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/algorithms"
                  element={
                    <PrivateRoute>
                      <Algorithms />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/data-structures"
                  element={
                    <PrivateRoute>
                      <DataStructures />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/practice"
                  element={
                    <PrivateRoute>
                      <Practice />
                    </PrivateRoute>
                  }
                />

                {/* Rotas de aprendizado protegidas */}
                <Route
                  path="/learn/what-is-programming"
                  element={
                    <PrivateRoute>
                      <WhatIsProgramming />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/learn/variables"
                  element={
                    <PrivateRoute>
                      <Variables />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/learn/control-structures"
                  element={
                    <PrivateRoute>
                      <ControlStructures />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/learn/arrays"
                  element={
                    <PrivateRoute>
                      <Arrays />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/learn/linked-lists"
                  element={
                    <PrivateRoute>
                      <LinkedLists />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/learn/stacks-queues"
                  element={
                    <PrivateRoute>
                      <StacksQueues />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/learn/bubble-sort"
                  element={
                    <PrivateRoute>
                      <BubbleSort />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/learn/selection-sort"
                  element={
                    <PrivateRoute>
                      <SelectionSort />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/learn/quick-sort"
                  element={
                    <PrivateRoute>
                      <QuickSort />
                    </PrivateRoute>
                  }
                />

                {/* Rota 404 */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </Layout>
        </AuthProvider>
      </Router>
      
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;