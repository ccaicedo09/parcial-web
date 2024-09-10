const mapUrls = {
    mainOffice: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63752.72997867034!2d-75.33504102543262!3d2.945949541545877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3b743deab507fd%3A0x5c08e6e92a1001a8!2sDistoyota%20Neiva!5e0!3m2!1ses-419!2sco!4v1725979737090!5m2!1ses-419!2sco",
    reindustriasOffice: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15938.447041239782!2d-75.29440136066444!3d2.927411332615399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3b74432b09a6a3%3A0x8640d01e2f3bbf38!2sReindustrias%20S.A.S!5e0!3m2!1ses-419!2sco!4v1725980169064!5m2!1ses-419!2sco",
    sidaOffice: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.6500050535396!2d-75.29081742451314!3d2.9166375469837984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3b73f5f217d96b%3A0x5d84de337660452b!2sHyundai%20Sida%20SA!5e0!3m2!1ses-419!2sco!4v1725980485307!5m2!1ses-419!2sco"
};

function updateMap(office) {
    document.getElementById("officeMap").src = mapUrls[office];
}