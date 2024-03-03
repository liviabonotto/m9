import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FiEdit } from "react-icons/fi";


const data = [
    {
        name: 'João',
        phone: '123456789',
        email: 'teste@teste.com',
        channel: 'E-mail',
        status: 'Ativo',
    },
    {
        name: 'João',
        phone: '123456789',
        email: 'teste@teste.com',
        channel: 'E-mail',
        status: 'Ativo',
    },
    {
        name: 'João',
        phone: '123456789',
        email: 'teste@teste.com',
        channel: 'E-mail',
        status: 'Ativo',
    },
    {
        name: 'João',
        phone: '123456789',
        email: 'teste@teste.com',
        channel: 'E-mail',
        status: 'Ativo',
    },
    {
        name: 'João',
        phone: '123456789',
        email: 'teste@teste.com',
        channel: 'E-mail',
        status: 'Ativo',
    },
    {
        name: 'João',
        phone: '123456789',
        email: 'teste@teste.com',
        channel: 'E-mail',
        status: 'Ativo',
    },
    {
        name: 'João',
        phone: '123456789',
        email: 'teste@teste.com',
        channel: 'E-mail',
        status: 'Ativo',
    },
];

export default function MyTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell>Usuário</TableCell>
            <TableCell align="right">Telefone</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Canal</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Ação</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.channel}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">
                <FiEdit size={20} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
