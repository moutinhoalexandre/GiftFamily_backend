import User, { hasMany, belongsTo } from "../models/user";
import Family, { belongsTo as _belongsTo } from "../models/family";
import Gift, { belongsTo as __belongsTo } from "../models/gift";
import Family_Gift from "../models/family_gift";

hasMany(Gift, { onDelete: "CASCADE" });
belongsTo(Family, { as: "User", foreignKey: "userId" });

_belongsTo(User, { as: "Family", foreignKey: "familyId" });

__belongsTo(User, { as: "Creator",foreignKey: "createdBy", onDelete: "CASCADE" });
__belongsTo(User, { as: "For", foreignKey: "giftFor", onDelete: "CASCADE" });
__belongsTo(User, { as: "Booker", foreignKey: "reservedBy",});


export default { User, Family, Gift, Family_Gift };
