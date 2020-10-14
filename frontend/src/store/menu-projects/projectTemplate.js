export default (title) => ({
    title: title,
    link: `/controll/projects/${title}`,
    fields: [
        {
            title: 'OBJECTS',
            link: `/controll/projects/${title}/objects`,
            fields: [
                {
                    title: 'Single',
                    fields: [],
                    link: `/controll/projects/${title}/objects/single`,
                },
                {
                    title: 'Slider',
                    fields: [],
                    link: `/controll/projects/${title}/objects/slider`,
                },
                {
                    title: 'Gallery',
                    fields: [],
                    link: `/controll/projects/${title}/objects/gallery`,
                },
                {
                    title: 'Web page',
                    fields: [],
                    link: `/controll/projects/${title}/objects/webpage`,
                },
            ]
        },
        {
            title: 'DEVICE',
            link: `/controll/projects/${title}/device`,
            fields: [],
        },
        {
            title: 'DISPLAY',
            link: `/controll/projects/${title}/display`,
            fields: [],
        },
        {
            title: 'Playlist+inetraction',
            link: `/controll/projects/${title}/playlist`,
            fields: [],
        }
    ]
});