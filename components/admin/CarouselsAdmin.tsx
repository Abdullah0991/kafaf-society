import {
    Create,
    Datagrid,
    Edit,
    FunctionField,
    ImageField,
    ImageInput,
    List,
    required,
    SelectInput,
    SimpleForm,
    useRecordContext,
} from 'react-admin';
import { Services } from "@prisma/client";
import { ServiceCategories } from "@/constants";
import { Carousels } from ".prisma/client";
import { generateImagePreview } from "@/components/admin/index";

const choices = ServiceCategories.map((cat) => ({ id: cat.id, name: cat.name }));
const api = process.env.NEXT_PUBLIC_API_URL;

export const CarouselsList = () => (
    <List>
        <Datagrid rowClick="edit">
            <FunctionField
                label="الصورة"
                render={(record: Carousels) => <img src={`${api}/files?n=${record.image}`} alt='i' width={120} />}
            />
            <FunctionField
                source="type"
                label="القسم"
                render={(rec: Services) => ServiceCategories.find(x => x.id === rec.type)?.name ?? rec.type}
            />
        </Datagrid>
    </List>
);

const CarouselTitle = () => {
    const record = useRecordContext();
    const name = ServiceCategories.find(x => x.id === record.type)?.name ?? record.type;
    return <span>شرائح صور {record ? `"${name}"` : ''}</span>;
};

export const CarouselsEdit = () => (
    <Edit title={<CarouselTitle />}>
        <SimpleForm>
            <SelectInput source="type" name="type" label="القسم" choices={choices} validate={required()} fullWidth />
            <ImageInput name='image' source='image' label='صورة' format={generateImagePreview} validate={required()}>
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Edit>
);

export const CarouselsCreate = () => (
    <Create>
        <SimpleForm>
            <SelectInput source="type" name="type" label="القسم" choices={choices} validate={required()} fullWidth />
            <ImageInput name='image' source='image' label='صورة' format={generateImagePreview} validate={required()}>
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Create>
);