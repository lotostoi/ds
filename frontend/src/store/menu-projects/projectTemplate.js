import { nanoid } from 'nanoid'

export default (title) => ({
    id: nanoid(),
    title: title,
    link: `/controll/projects/${title}`,
    fields: [
        {
            id: nanoid(),
            title: 'OBJECTS',
            link: `/controll/projects/${title}/objects`,
            fields: [
                {
                    id: nanoid(),
                    title: 'Single',
                    fields: [],
                    link: `/controll/projects/${title}/objects/single`,
                },
                {
                    id: nanoid(),
                    title: 'Slider',
                    fields: [],
                    link: `/controll/projects/${title}/objects/slider`,
                },
                {
                    id: nanoid(),
                    title: 'Gallery',
                    fields: [],
                    link: `/controll/projects/${title}/objects/gallery`,
                },
                {
                    id: nanoid(),
                    title: 'Web page',
                    fields: [],
                    link: `/controll/projects/${title}/objects/webpage`,
                },
            ]
        },
        {
            id: nanoid(),
            title: 'DEVICE',
            link: `/controll/projects/${title}/device`,
            fields: [],
        },
        {
            id: nanoid(),
            title: 'DISPLAY',
            link: `/controll/projects/${title}/display`,
            fields: [],
        },
        {
            id: nanoid(),
            title: 'Playlist+inetraction',
            link: `/controll/projects/${title}/playlist`,
            fields: [],
        }
    ],
    
});

