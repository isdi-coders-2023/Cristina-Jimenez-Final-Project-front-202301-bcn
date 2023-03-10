interface ModalMessages {
  loginError: string;
  creatingPokemon: {
    sucess: string;
    error: string;
  };
  deletingPokemon: {
    error: string;
    sucess: string;
  };
  editingPokemon: {
    error: string;
    sucess: string;
  };
}

const modalMessages: ModalMessages = {
  loginError: "Invalid credentials",
  creatingPokemon: {
    sucess: "Pokémon created!",
    error: "Error creating Pokémon",
  },
  deletingPokemon: {
    error: "Error deleting Pokémon",
    sucess: "Pokémon deleted!",
  },
  editingPokemon: {
    error: "Error updating Pokémon",
    sucess: "Pokémon updated!",
  },
};

export default modalMessages;
