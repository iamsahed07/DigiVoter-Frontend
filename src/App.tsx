// import {
//   Route,
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
// } from "react-router-dom";
// import { Toaster } from "react-hot-toast";
// import AdminLogin from "./pages/AdminLogin";
// import AdminDashboard from "./pages/AdminDashboard";
// import ElectionManagement from "./pages/ElectionManagement";
// import AddElection from "./components/AddElection";
// import AddCandidate from "./components/AddCandidate";
// import CandidateManagement from "./pages/CandidateManagement";
// import AddVoter from "./components/AddVoter";
// import VoterManagement from "./pages/VoterManagement";
// import ResultsAnalytic from "./pages/ResultsAnalytics";
// import Login from "./pages/Login";
// import HomeVoter from "./pages/HomeVoter";
// import Profile from "./pages/Profile";
// import VotingArea from "./pages/VotingArea";
// import CastVote from "./pages/CastVote";
// import VotingResults from "./pages/VotingResults";
// import OuterLayout from "./components/OuterLayout";
// import { InnerLayout } from "./components/InnerLayout";
// import { InnerLayoutAdmin } from "./components/InnerLayoutAdmin";
// import { Information } from "./pages/Information";
// import { VoterRegistration } from "./pages/VoterRegistration";
// import { ScrollRestoration } from "react-router-dom";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route element={<OuterLayout />}>
//       <Route path="/" element={<Login />} />
//       <Route path="/admin-login" element={<AdminLogin />} />

//       <Route path="/login" element={<Login />} />

//       {/* Voter Routes */}
//       <Route element={<InnerLayout />}>
//         <Route path="/home" element={<HomeVoter />} />
//         <Route path="/information" element={<Information />} />
//         <Route path="/voter-registration" element={<VoterRegistration />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/voting-area" element={<VotingArea />} />
//         <Route path="/cast-vote" element={<CastVote />} />
//         <Route path="/voting-results" element={<VotingResults />} />
//       </Route>

//       {/* Admin Routes */}
//       <Route element={<InnerLayoutAdmin />}>
//           <Route path="/admin-dashboard" element={<AdminDashboard />} />
//           <Route path="/election-management" element={<ElectionManagement />} />
//           <Route path="/add-election" element={<AddElection />} />
//           <Route
//             path="/candidate-management"
//             element={<CandidateManagement />}
//           />
//           <Route path="/add-candidate" element={<AddCandidate />} />
//           <Route path="/voter-management" element={<VoterManagement />} />
//           <Route path="/add-voter" element={<AddVoter />} />
//           <Route path="/results-analytics" element={<ResultsAnalytic />} />
//       </Route>
//     </Route>
//   )
// );

// function App() {
//   return (
//     <div className="bg-[#EEEEEE]">
//       <Toaster />
//       <RouterProvider router={router} />
//     </div>
//   );
// }

// export default App;



import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ElectionManagement from "./pages/ElectionManagement";
import AddElection from "./components/AddElection";
import AddCandidate from "./components/AddCandidate";
import CandidateManagement from "./pages/CandidateManagement";
import AddVoter from "./components/AddVoter";
import VoterManagement from "./pages/VoterManagement";
import ResultsAnalytic from "./pages/ResultsAnalytics";
import Login from "./pages/Login";
import HomeVoter from "./pages/HomeVoter";
import Profile from "./pages/Profile";
import VotingArea from "./pages/VotingArea";
import CastVote from "./pages/CastVote";
import VotingResults from "./pages/VotingResults";
import OuterLayout from "./components/OuterLayout";
import { InnerLayout } from "./components/InnerLayout";
import { InnerLayoutAdmin } from "./components/InnerLayoutAdmin";
import { Information } from "./pages/Information";
import { VoterRegistration } from "./pages/VoterRegistration";
import AdminProtectedRoute from "./protected Routes/AdminProtectedRoute";
import VoterProtectedRoute from "./protected Routes/VoterProtectedRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<OuterLayout />}>
      <Route path="/" element={<Login />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/login" element={<Login />} />

      {/* Voter Routes */}
      <Route element={<InnerLayout />}>
        <Route
          path="/home"
          element={
            <VoterProtectedRoute>
              <HomeVoter />
            </VoterProtectedRoute>
          }
        />
        <Route
          path="/information"
          element={
            <VoterProtectedRoute>
              <Information />
            </VoterProtectedRoute>
          }
        />
        <Route
          path="/voter-registration"
          element={
            <VoterProtectedRoute>
              <VoterRegistration />
            </VoterProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <VoterProtectedRoute>
              <Profile />
            </VoterProtectedRoute>
          }
        />
        <Route
          path="/voting-area"
          element={
            <VoterProtectedRoute>
              <VotingArea />
            </VoterProtectedRoute>
          }
        />
        <Route
          path="/cast-vote"
          element={
            <VoterProtectedRoute>
              <CastVote />
            </VoterProtectedRoute>
          }
        />
        <Route
          path="/voting-results"
          element={
            <VoterProtectedRoute>
              <VotingResults />
            </VoterProtectedRoute>
          }
        />
      </Route>

      {/* Admin Routes */}
      <Route element={<InnerLayoutAdmin />}>
        <Route
          path="/admin-dashboard"
          element={
            <AdminProtectedRoute>
              <AdminDashboard />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/election-management"
          element={
            <AdminProtectedRoute>
              <ElectionManagement />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/add-election"
          element={
            <AdminProtectedRoute>
              <AddElection />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/candidate-management"
          element={
            <AdminProtectedRoute>
              <CandidateManagement />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/add-candidate"
          element={
            <AdminProtectedRoute>
              <AddCandidate />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/voter-management"
          element={
            <AdminProtectedRoute>
              <VoterManagement />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/add-voter"
          element={
            <AdminProtectedRoute>
              <AddVoter />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/results-analytics"
          element={
            <AdminProtectedRoute>
              <ResultsAnalytic />
            </AdminProtectedRoute>
          }
        />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <div className="bg-[#EEEEEE]">
      <Toaster />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
