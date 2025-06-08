import { Routes, Route } from 'react-router-dom';
import Sidebar from './layout/Sidebar';
import Dashboard from './pages/Dashboard';
import Team from './pages/Team';
import Projects from './pages/Projects';
import Calendar from './pages/Calendar';
import Documents from './pages/Documents';
import Reports from './pages/Reports';
import Notes from './pages/ManageNotes';
import Announcement from './pages/Announcement';
import Payment from './pages/Payment';
import ManageUsers from './pages/ManageUsers';
import SemestersAndSubjects from './pages/SemestersAndSubjects';
import UploadNotes from './pages/UploadNotes';

export default function App() {
  return (
    <>
      <Sidebar />
      <div className="lg:pl-80 p-4  ">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/announcement" element={<Announcement/>} />
          <Route path="/payments" element={<Payment/>} />
          <Route path="/manage-notes" element={<UploadNotes/>} />
          <Route path="/manage-users" element={<ManageUsers/>} />
          <Route path="/semester-subjects" element={<SemestersAndSubjects />} />
        </Routes>
      </div>
    </>
  );
}
