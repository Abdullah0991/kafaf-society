"use client"; // only needed if you choose App Router
import { Admin, EditGuesser, ListGuesser, Resource } from "react-admin";
import { dataProvider } from "ra-data-simple-prisma";

const AdminApp = () => (
    <Admin dataProvider={dataProvider("/api")}>
        {/*<Resource
            name="stats"
            list={ListGuesser}
            edit={EditGuesser}
            recordRepresentation="name"
        />
        <Resource
            name="campaigns"
            list={ListGuesser}
            edit={EditGuesser}
            recordRepresentation="title"
        />
        <Resource
            name="services"
            list={ListGuesser}
            edit={EditGuesser}
            recordRepresentation="title"
        />*/}
        <Resource name="news" list={ListGuesser} edit={EditGuesser} />
    </Admin>
);

export default AdminApp;