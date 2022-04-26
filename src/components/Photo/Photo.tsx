import { Button, Table } from "antd";
import React from "react";
import usePhoto, { PhotoItem } from "./hooks/usePhoto";

export default function Photo() {
  const { data, isFetching, page, setPage, size, setSize } = usePhoto();

  return (
    <>
      <Table<PhotoItem>
        dataSource={data ?? []}
        tableLayout="fixed"
        pagination={{
          current: page,
          pageSize: size,
          total: 5000,
          showSizeChanger: true,
          showQuickJumper: true,
          onChange: (page, size) => {
            console.log("page", page, "size", size);
            setPage(page);
            setSize(size);
          },
        }}
      >
        <Table.Column title="Id" dataIndex="id" key="id" width={100} />
        <Table.Column title="title" dataIndex="title" key="title" width={400} />
      </Table>
    </>
  );
}
