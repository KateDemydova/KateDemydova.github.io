import Client from '../models/clientModel.mjs';


export const getClients = async (req, res) => {
  try {
    const {search, page = 1, limit = 6} = req.query;

    let filter = {};
    if (search) {
      filter.name = {$regex: search, $options: "i"};
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const [clients, total] = await Promise.all([
      Client.find(filter)
        .sort({createdAt: -1})
        .skip(skip)
        .limit(parseInt(limit)),
      Client.countDocuments(filter)
    ]);

    res.status(200).json({
      message: "Клієнти успішно отримані",
      data: clients,
      total
    });
  } catch (err) {
    res.status(500).json({
      message: "Помилка при пошуку клієнтів",
      error: err.message
    });
  }
};

export const getClient = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    if (!client) {
      return res.status(404).json({message: 'Клієнта не знайдено'});
    }
    res.status(200).json({
      message: "Клієнта успішно знайдено",
      data: client
    });
  } catch (err) {
    res.status(500).json({
      message: "Помилка при отриманні клієнта",
      error: err.message
    });
  }
};

export const createClient = async (req, res) => {
  try {
    const newClient = new Client(req.body);
    await newClient.save();

    res.status(201).json({
      message: "Клієнта створено",
      data: newClient
    });
  } catch (err) {
    res.status(500).json({
      message: "Помилка при створенні клієнта",
      error: err.message
    });
  }
};

export const updateClient = async (req, res) => {
  try {
    const updated = await Client.findByIdAndUpdate(req.params.id, req.body, {new: true});

    if (!updated) {
      return res.status(404).json({message: "Клієнта не знайдено"});
    }

    res.status(200).json({
      message: "Клієнта оновлено",
      data: updated
    });
  } catch (err) {
    res.status(500).json({
      message: "Помилка при оновленні клієнта",
      error: err.message
    });
  }
};

export const deleteClient = async (req, res) => {
  try {
    const deleted = await Client.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({message: "Клієнта не знайдено"});
    }

    res.status(200).json({
      message: "Клієнта видалено",
      data: deleted
    });
  } catch (err) {
    res.status(500).json({
      message: "Помилка при видаленні клієнта",
      error: err.message
    });
  }
};