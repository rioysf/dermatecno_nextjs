'use client'

import React, { useState, lazy } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Table } from 'react-bootstrap';

const ComponentTable = (props) => {
    const router = useRouter()

    return (
        <Table responsive className="table table-striped text-nowrap">
            <thead>
                <tr>
                    <th></th>
                    <th className="text-black">Appointment</th>
                    <th className="text-black">Pasien</th>
                    <th className="text-black">Dokter</th>
                    <th className="text-black">Tanggal</th>
                    <th className="text-black">Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody id="has-data">
                <tr>
                    <td colSpan={7} className="align-middle text-center">Data tidak ditemukan!</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default ComponentTable