import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface PaginationRoundedProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function PaginationRounded({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationRoundedProps) {
  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    onPageChange(page);
  };

  return (
    <Stack spacing={2} alignItems="center" marginTop={4}>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
        color="primary"
      />
    </Stack>
  );
}
