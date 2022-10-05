import React from "react";

const AllOrganizations = () => {
  const organizations = [
    {
      color: "#0a966f",
      organizationImage: "M",
      organizationName: "M. Organizasyonu",
    },
    {
      color: "#0a966f",
      organizationImage: "M",
      organizationName: "M. Organizasyonu",
    },
    {
      color: "#0a966f",
      organizationImage: "M",
      organizationName: "M. Organizasyonu",
    },
  ];

  return (
    <div className="absolute top-0 left-0 sm:left-auto sm:right-auto w-full h-full flex flex-col gap-6">
      <h1 className="text-[20px] mt-10 font-medium">Tüm Organizasyonlar</h1>
      <p className="text-sm block">
        Aşağıda tüm organizasyonların listesi
        bulunmaktadır.
      </p>
      <div className="w-full flex flex-col">
        <div className="py-2 border-b border-gray-300 text-sm font-medium pl-2">
          Organizasyon
        </div>
        <ul>
          {organizations.map((organization) => (
            <li className="flex flex-row items-center gap-2 py-4 pl-4 text-[15px] text-gray-700 border-b border-gray-300/50 hover:bg-gray-50">
              <div
                style={{ backgroundColor: organization.color }}
                className="w-6 h-6 rounded text-xs font-medium text-white flex items-center justify-center"
              >
                {organization.organizationImage}
              </div>
              <span>{organization.organizationName}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllOrganizations;
