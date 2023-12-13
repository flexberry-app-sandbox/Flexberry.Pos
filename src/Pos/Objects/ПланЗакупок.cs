﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Pos
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// План закупок.
    /// </summary>
    // *** Start programmer edit section *** (ПланЗакупок CustomAttributes)

    // *** End programmer edit section *** (ПланЗакупок CustomAttributes)
    [AutoAltered()]
    [Caption("План закупок")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПланЗакупокE", new string[] {
            "Номер as \'Номер\'",
            "ДатаНачала as \'Дата начала\'"})]
    [AssociatedDetailViewAttribute("ПланЗакупокE", "план", "ПланE", true, "", "План", true, new string[] {
            ""})]
    [View("ПланЗакупокL", new string[] {
            "ДатаНачала as \'Дата начала\'",
            "Номер as \'Номер\'"})]
    public class ПланЗакупок : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДатаНачала = System.DateTime.Now;
        
        private int fНомер;
        
        private IIS.Pos.Организации fОрганизации;
        
        private IIS.Pos.Склады fСклады;
        
        private IIS.Pos.Контрагенты fКонтрагенты;
        
        private IIS.Pos.DetailArrayOfПлан fплан;
        
        // *** Start programmer edit section *** (ПланЗакупок CustomMembers)

        // *** End programmer edit section *** (ПланЗакупок CustomMembers)

        
        /// <summary>
        /// ДатаНачала.
        /// </summary>
        // *** Start programmer edit section *** (ПланЗакупок.ДатаНачала CustomAttributes)

        // *** End programmer edit section *** (ПланЗакупок.ДатаНачала CustomAttributes)
        public virtual System.DateTime ДатаНачала
        {
            get
            {
                // *** Start programmer edit section *** (ПланЗакупок.ДатаНачала Get start)

                // *** End programmer edit section *** (ПланЗакупок.ДатаНачала Get start)
                System.DateTime result = this.fДатаНачала;
                // *** Start programmer edit section *** (ПланЗакупок.ДатаНачала Get end)

                // *** End programmer edit section *** (ПланЗакупок.ДатаНачала Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПланЗакупок.ДатаНачала Set start)

                // *** End programmer edit section *** (ПланЗакупок.ДатаНачала Set start)
                this.fДатаНачала = value;
                // *** Start programmer edit section *** (ПланЗакупок.ДатаНачала Set end)

                // *** End programmer edit section *** (ПланЗакупок.ДатаНачала Set end)
            }
        }
        
        /// <summary>
        /// Номер.
        /// </summary>
        // *** Start programmer edit section *** (ПланЗакупок.Номер CustomAttributes)

        // *** End programmer edit section *** (ПланЗакупок.Номер CustomAttributes)
        public virtual int Номер
        {
            get
            {
                // *** Start programmer edit section *** (ПланЗакупок.Номер Get start)

                // *** End programmer edit section *** (ПланЗакупок.Номер Get start)
                int result = this.fНомер;
                // *** Start programmer edit section *** (ПланЗакупок.Номер Get end)

                // *** End programmer edit section *** (ПланЗакупок.Номер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПланЗакупок.Номер Set start)

                // *** End programmer edit section *** (ПланЗакупок.Номер Set start)
                this.fНомер = value;
                // *** Start programmer edit section *** (ПланЗакупок.Номер Set end)

                // *** End programmer edit section *** (ПланЗакупок.Номер Set end)
            }
        }
        
        /// <summary>
        /// План закупок.
        /// </summary>
        // *** Start programmer edit section *** (ПланЗакупок.Контрагенты CustomAttributes)

        // *** End programmer edit section *** (ПланЗакупок.Контрагенты CustomAttributes)
        [PropertyStorage(new string[] {
                "Контрагенты"})]
        [NotNull()]
        public virtual IIS.Pos.Контрагенты Контрагенты
        {
            get
            {
                // *** Start programmer edit section *** (ПланЗакупок.Контрагенты Get start)

                // *** End programmer edit section *** (ПланЗакупок.Контрагенты Get start)
                IIS.Pos.Контрагенты result = this.fКонтрагенты;
                // *** Start programmer edit section *** (ПланЗакупок.Контрагенты Get end)

                // *** End programmer edit section *** (ПланЗакупок.Контрагенты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПланЗакупок.Контрагенты Set start)

                // *** End programmer edit section *** (ПланЗакупок.Контрагенты Set start)
                this.fКонтрагенты = value;
                // *** Start programmer edit section *** (ПланЗакупок.Контрагенты Set end)

                // *** End programmer edit section *** (ПланЗакупок.Контрагенты Set end)
            }
        }
        
        /// <summary>
        /// План закупок.
        /// </summary>
        // *** Start programmer edit section *** (ПланЗакупок.Организации CustomAttributes)

        // *** End programmer edit section *** (ПланЗакупок.Организации CustomAttributes)
        [PropertyStorage(new string[] {
                "Организации"})]
        [NotNull()]
        public virtual IIS.Pos.Организации Организации
        {
            get
            {
                // *** Start programmer edit section *** (ПланЗакупок.Организации Get start)

                // *** End programmer edit section *** (ПланЗакупок.Организации Get start)
                IIS.Pos.Организации result = this.fОрганизации;
                // *** Start programmer edit section *** (ПланЗакупок.Организации Get end)

                // *** End programmer edit section *** (ПланЗакупок.Организации Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПланЗакупок.Организации Set start)

                // *** End programmer edit section *** (ПланЗакупок.Организации Set start)
                this.fОрганизации = value;
                // *** Start programmer edit section *** (ПланЗакупок.Организации Set end)

                // *** End programmer edit section *** (ПланЗакупок.Организации Set end)
            }
        }
        
        /// <summary>
        /// План закупок.
        /// </summary>
        // *** Start programmer edit section *** (ПланЗакупок.Склады CustomAttributes)

        // *** End programmer edit section *** (ПланЗакупок.Склады CustomAttributes)
        [PropertyStorage(new string[] {
                "Склады"})]
        [NotNull()]
        public virtual IIS.Pos.Склады Склады
        {
            get
            {
                // *** Start programmer edit section *** (ПланЗакупок.Склады Get start)

                // *** End programmer edit section *** (ПланЗакупок.Склады Get start)
                IIS.Pos.Склады result = this.fСклады;
                // *** Start programmer edit section *** (ПланЗакупок.Склады Get end)

                // *** End programmer edit section *** (ПланЗакупок.Склады Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПланЗакупок.Склады Set start)

                // *** End programmer edit section *** (ПланЗакупок.Склады Set start)
                this.fСклады = value;
                // *** Start programmer edit section *** (ПланЗакупок.Склады Set end)

                // *** End programmer edit section *** (ПланЗакупок.Склады Set end)
            }
        }
        
        /// <summary>
        /// План закупок.
        /// </summary>
        // *** Start programmer edit section *** (ПланЗакупок.план CustomAttributes)

        // *** End programmer edit section *** (ПланЗакупок.план CustomAttributes)
        public virtual IIS.Pos.DetailArrayOfПлан план
        {
            get
            {
                // *** Start programmer edit section *** (ПланЗакупок.план Get start)

                // *** End programmer edit section *** (ПланЗакупок.план Get start)
                if ((this.fплан == null))
                {
                    this.fплан = new IIS.Pos.DetailArrayOfПлан(this);
                }
                IIS.Pos.DetailArrayOfПлан result = this.fплан;
                // *** Start programmer edit section *** (ПланЗакупок.план Get end)

                // *** End programmer edit section *** (ПланЗакупок.план Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПланЗакупок.план Set start)

                // *** End programmer edit section *** (ПланЗакупок.план Set start)
                this.fплан = value;
                // *** Start programmer edit section *** (ПланЗакупок.план Set end)

                // *** End programmer edit section *** (ПланЗакупок.план Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПланЗакупокE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПланЗакупокE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПланЗакупокE", typeof(IIS.Pos.ПланЗакупок));
                }
            }
            
            /// <summary>
            /// "ПланЗакупокL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПланЗакупокL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПланЗакупокL", typeof(IIS.Pos.ПланЗакупок));
                }
            }
        }
    }
}
