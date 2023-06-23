

var mytutorial = new Tutorial("ieee_tutorial", {
    steps: [
        {
            highlight: "#rad_logo",
            title: "First step",
            text: "Welcome to our demo of RADIANCE!"
        },
        {
            highlight: "#change_prof",
            title: "Second step",
            text: "You can change the current profile using this button. The profiles correspond to the test cases in the article.",
            callback: {
                fn: () => {
                    setTimeout(() => { $('#builder_element_selection_modal').modal('hide') }, 3000);
                }

            }
        },
        {
            highlight: "#currently_selected_profile",
            title: "Third step",
            text: "This is the builder view, it lets users configure and characterize software designs (profiles). Let us see the operations in this profile.",
            callback: {
                fn: () => {
                    document.getElementById('_15_parent_header').click();
                }
            }
        },
        {
            highlight: "#available_children_area",
            title: "Fourth step",
            text: "By clicking on an operation, you can observe its attributes.",
            callback: {
                fn: () => {
                    populateChildren(15, 17, 1686160904925, false, false)
                }
            }
        },
        {
            highlight: "#available_variables_area",
            title: "Fifth step",
            text: "You can explore the attributes for this operation. Some of them are restricted to the 'intermediate' user; a user with more experience.",
            callback: {

            }
        },
        {
            highlight: "#builder_level_selection",
            title: "Sixth step",
            text: "You can switch to intermediate using this dropdown.",
            callback: {
                fn: () => {
                    document.getElementById('_15_parent_header').click();
                }
            }
        },
        {
            highlight: "#view_algo_button",
            title: "Seventh step",
            text: "You must've noticed that operations have a colored label from A to G. This is due to our algorithm, which analyzes the attributes of each operation and creates a score based on them. The algorithm can be edited using this button.",
            callback: {
                fn: () => {
                   
                }
            }
        },
        {
            highlight: "#step_diagram_view",
            title: "Eigth step",
            text: "This step diagram considers the parallel execution of the operations, and assigns them ratings based on the consumption level generated by them.",
            callback: {
                fn: () => {
                    
                }
            }
        },
        {
            highlight: "#sequencer_view",
            title: "Nineth step",
            text: "You can use triggers and results to generate execution sequences",
            callback: {
                fn: () => {
                    
                }
            }
        },
        {
            highlight: "#rad_logo",
            title: "Tutorial end",
            text: "That's it for now. You can explore RADIANCE freely.",
            callback: {
                fn: () => {
                    
                }
            }
        }



    ]
}); mytutorial.start();