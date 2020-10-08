<template>
<div class="ds-left">
    <first-level-menu title="Content" toLink="DsContent"></first-level-menu>
    <first-level-menu :borderNo="'left'" title="Projects" toLink="DsProjects">
        <second-level-menu :borderNo="'all'" title="Yacht FRASER" toLink="DsProjects">
            <third-level-menu :borderNo="'all'" title="Device" toLink="DsProjects"></third-level-menu>
            <third-level-menu :borderNo="'all'" title="Display" toLink="DsProjects"></third-level-menu>
            <third-level-menu :borderNo="'all'" title="Interaction" toLink="DsProjects"></third-level-menu>
        </second-level-menu>
        <second-level-menu :borderNo="'all'" title="ArtGallery" toLink="DsProjects"></second-level-menu>
        <second-level-menu :borderNo="'all'" title="Space" toLink="DsProjects"></second-level-menu>
        <second-level-menu :borderNo="'all'" title="Фото выставка город Артём" toLink="DsProjects"></second-level-menu>
    </first-level-menu>
    <footer class="ds-left-footer">
        <m-add-devise>
            <button @click="off">Close</button>
        </m-add-devise>
        <button class="ds-left-add-device" @click="on">+</button>
    </footer>
</div>
</template>

<script>
import MAddDevise from "@/components/library/addDevise";
import DropPanel from "@/components/library/dropPanel";
import FirstLevelMenu from "@/components/library/menu/first-level-menu";
import SecondLevelMenu from "@/components/library/menu/second-level-menu";
import ThirdLevelMenu from "@/components/library/menu/third-level-menu";
import {
    mapActions
} from "vuex";

export default {
    data: () => ({
        testOblject: {
            title: "Pojects",
            fields: [{
                    name: "Yacht FRASER",
                    fields: [{
                            title: "Device",
                        },
                        {
                            title: "Display",
                        },
                        {
                            title: "Interaction",
                        },
                    ],
                },
                {
                    name: "ArtGallery",
                    fields: [{
                            title: "Device",
                        },
                        {
                            title: "Display",
                        },
                        {
                            title: "Interaction",
                        },
                    ],
                },
                {
                    name: "Space",
                },
                {
                    name: "Фото выставка город Артём",
                },
            ],
        },
    }),
    components: {
        MAddDevise,
        DropPanel,
        FirstLevelMenu,
        SecondLevelMenu,
        ThirdLevelMenu,
    },
    methods: {
        ...mapActions({
            on: "modWin/on",
            off: "modWin/off",
        }),
        test() {
            console.log("test");
        },
    },
};
</script>

<style lang="scss" scoped>
.yellow {
    background-color: yellow;
}

::-webkit-scrollbar {
    width: 3px !important;
    /* ширина для вертикального скролла */
    height: 8px;
    /* высота для горизонтального скролла */
    background-color: #130b0a;
}

.ds-left {
    display: flex;
    min-width: 300px;
    border-right: 1px solid #000;
    flex-direction: column;
    justify-content: flex-start;
    overflow: auto;
}

.ds-left-footer {
    margin-top: auto;
    display: flex;
    padding: 0 20px;
    min-height: 50px;
    border-top: 1px solid black;
    align-items: center;
}

.addlinks {
    margin-left: 20px;
    display: flex;
    justify-content: flex-start;
    font-size: 15px;
}

.mainLink {
    text-decoration: none;
    color: $fontColor;
    text-align-last: left;
}

.ds-left-add-device {
    width: 30px;
    height: 30px;
    outline: none;
    background-color: $buttonColor;
    color: $buttonTextColor;

    &:hover {
        color: $textHover;
    }

    &:active {
        transform: scale(0.9);
    }
}
</style>
