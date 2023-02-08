let countries = new Vue({
    el: ".wrapper",
    data: {
        countriesInfo: {
            Indonesia: {
                names: ["Ghazi", "Arslan", "Utsman"],
                descr: [
                    "Top number one hotel in the world with the most comfortable.",
                    "Number three hotel in the world with the most comfortable.",
                    "One of the most comfortable hotels in the world.",
                ],
                reviewerInfo: {
                    firstName: "Erturul",
                    location: "Japung, Indonesia",
                    ratingStats: 3,
                },
            },

            Italy: {
                names: ["Serbelloni", "Belmond", "Vittoria"],
                descr: [
                    "Top number one hotel in the world with the most comfortable.",
                    "Number three hotel in the world with the most comfortable.",
                    "One of the most comfortable hotels in the world.",
                ],
                reviewerInfo: {
                    firstName: "Stefano",
                    location: "Rome, Italy",
                    ratingStats: 5,
                },
            },

            France: {
                names: ["Riva Bella", "de Lanirron", "La Pinède"],
                descr: [
                    "Top number one hotel in the world with the most comfortable.",
                    "Number three hotel in the world with the most comfortable.",
                    "One of the most comfortable hotels in the world.",
                ],
                reviewerInfo: {
                    firstName: "Emma",
                    location: "Paris, France",
                    ratingStats: 4,
                },
            },

            Sweden: {
                names: ["Gothenburg", "Slussen", "Logi Skärhamn"],
                descr: [
                    "Top number one hotel in the world with the most comfortable.",
                    "Number three hotel in the world with the most comfortable.",
                    "One of the most comfortable hotels in the world.",
                ],
                reviewerInfo: {
                    firstName: "Lars",
                    location: "Stockholm, Sweeden",
                    ratingStats: 3,
                },
            },
        },
        option: "Indonesia",
        play: 3,
    },
    methods: {
        value() {
            this.option = document.querySelector("select#countries").value;
        },
    },
});
