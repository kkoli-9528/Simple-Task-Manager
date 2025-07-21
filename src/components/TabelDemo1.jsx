import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const tasks = [
  {
    id: 1,
    title: "Kunal",
    status: "In Progress"
  },
  {
    id: 2,
    title: "Bhagu",
    status: "In Progress"
  },
  {
    id: 3,
    title: "Thagu",
    status: "In Progress"
  }
];

export const TabelDemo = ({ filterList }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead className="w-[100px]">Title</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.values(tasks).map((eachTask) => (
          <TableRow key={eachTask.id}>
            <TableCell className="font-medium">{eachTask.id}</TableCell>
            <TableCell>{eachTask.title}</TableCell>
            <TableCell className="text-right">{eachTask.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
};
